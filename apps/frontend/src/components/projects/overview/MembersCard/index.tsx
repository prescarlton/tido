import { Box, Card, Title } from "@mantine/core"

import UserChip from "@/components/boards/tasks/TaskDialog/TaskMembers/UserChip"
import useListProjectMembers from "@/hooks/api/projects/useListProjectMembers"

import styles from "./styles.module.scss"

const MembersCard = () => {
  const { data: members } = useListProjectMembers()
  return (
    <Card withBorder className={styles.membersCard}>
      <Title size="h4">Members</Title>
      <Box className={styles.innerContent}>
        {members?.map((member) => (
          <UserChip key={member.user.id} user={member.user} />
        ))}
      </Box>
    </Card>
  )
}
export default MembersCard
