import {
  createStyles,
  getStylesRef,
  Navbar,
  rem,
  UnstyledButton,
} from "@mantine/core"
import {
  IconCheckbox,
  IconHome,
  IconSettings,
  IconStack,
} from "@tabler/icons-react"
import { NavLink } from "react-router-dom"

const useStyles = createStyles((theme) => ({
  section: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    marginBottom: theme.spacing.md,
    padding: `calc(${theme.spacing.md} - ${rem(6)})`,
    paddingBottom: theme.spacing.md,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  mainLink: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: theme.fontSizes.xs,
    padding: `${rem(8)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    fontWeight: 600,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
    "&.active,&.active:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },

  mainLinkInner: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    ref: getStylesRef("icon"),
  },
}))

const MainLinks = () => {
  const { classes } = useStyles()

  const links = [
    {
      label: "Home",
      icon: IconHome,
      path: "/dashboard",
    },
    {
      label: "Projects",
      icon: IconStack,
      path: "/p",
    },
    {
      label: "My tasks",
      icon: IconCheckbox,
      path: "/my-tasks",
    },
    {
      label: "Settings",
      icon: IconSettings,
      path: "/settings",
    },
  ]

  return (
    <Navbar.Section className={classes.section}>
      {links.map((link) => (
        <UnstyledButton
          key={link.label}
          className={classes.mainLink}
          component={NavLink}
          to={link.path}
        >
          <div className={classes.mainLinkInner}>
            <link.icon
              size={20}
              className={classes.mainLinkIcon}
              strokeWidth={2.5}
            />
            <span>{link.label}</span>
          </div>
        </UnstyledButton>
      ))}
    </Navbar.Section>
  )
}

export default MainLinks
