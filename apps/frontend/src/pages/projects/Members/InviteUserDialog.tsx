import { ActionIcon, Modal, Stack, Text, useMantineTheme } from "@mantine/core"
import { IconArrowRight, IconMail } from "@tabler/icons-react"
import { useForm } from "react-hook-form"
import { InviteUserToWorkspaceBody } from "shared/types/workspaces"

import ControlledTextField from "@/components/fields/ControlledTextField"
import useGetActiveWorkspace from "@/hooks/api/workspaces/useGetActiveWorkspace"
import useInviteUserToWorkspace from "@/hooks/api/workspaces/useInviteUserToWorkspace"

interface InviteMemberDialogProps {
  onClose: () => void
  opened: boolean
}

const InviteMemberDialog = ({ onClose, opened }: InviteMemberDialogProps) => {
  const { data: workspace, isPending } = useGetActiveWorkspace()
  const { mutateAsync: inviteUser, isPending: isInvitePending } =
    useInviteUserToWorkspace()
  const theme = useMantineTheme()
  const defaultValues = {
    email: "",
  }
  const { control, handleSubmit } = useForm<InviteUserToWorkspaceBody>({
    defaultValues,
  })

  if (!workspace || isPending) return null

  const onSubmit = async (data: typeof defaultValues) => {
    await inviteUser(data)
  }

  return (
    <Modal opened={opened} onClose={onClose} centered>
      <Modal.Body
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <Stack align="center" gap="sm">
          <IconMail />
          <Text size="lg" fw="bold">
            Invite a member to {workspace.name}
          </Text>
        </Stack>
        <ControlledTextField
          control={control}
          name="email"
          label="Email address"
          TextInputProps={{
            rightSection: (
              <ActionIcon
                variant="filled"
                color={theme.primaryColor}
                loading={isInvitePending}
                type="submit"
              >
                <IconArrowRight />
              </ActionIcon>
            ),
          }}
        />
      </Modal.Body>
    </Modal>
  )
}

export default InviteMemberDialog
