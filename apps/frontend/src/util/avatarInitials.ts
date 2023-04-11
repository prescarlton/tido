export const avatarInitials = (str: string) => {
  return str
    .split(" ")
    .map((word) => word[0])
    .join("")
}
