import { Code, createStyles, Navbar, rem, TextInput } from "@mantine/core"
import { Search } from "tabler-icons-react"

import MainLinks from "@/components/common/Sidebar/MainLinks"
import SidebarProjects from "@/components/common/Sidebar/SidebarProjects"

export const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
    overflow: "hidden",
    transition: "width 200ms ease, min-width 200ms ease",
  },

  section: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    marginBottom: theme.spacing.md,
  },

  searchCode: {
    fontWeight: 700,
    fontSize: rem(10),
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
  },
}))

const Sidebar = () => {
  const { classes } = useStyles()

  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
      {/* <Navbar.Section className={classes.section}>
        <UserButton
          image="https://i.imgur.com/fGxgcDF.png"
          name="Bob Rulebreaker"
          email="Product owner"
          icon={<IconSelector size="0.9rem" stroke={1.5} />}
        />
      </Navbar.Section> */}

      <TextInput
        placeholder="Search"
        size="xs"
        icon={<Search size="0.8rem" />}
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ rightSection: { pointerEvents: "none" } }}
        mb="sm"
      />
      <MainLinks />
      {/* <SidebarFavorites /> */}
      <SidebarProjects />
    </Navbar>
  )
}
export default Sidebar
