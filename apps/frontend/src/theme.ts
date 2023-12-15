import { MantineThemeOverride } from "@mantine/core"

const theme: MantineThemeOverride = {
  primaryColor: "indigo",
  fontFamily: "GeistVariable, serif",
  headings: {},
  spacing: {
    xxs: ".25rem",
  },
  components: {
    Modal: {
      defaultProps: (theme) => ({
        styles: {},
        overlayProps: {
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        },
      }),
      styles: {
        overlay: { zIndex: 10000 },
        inner: { zIndex: 10001 },
      },
    },
  },
}

export default theme
