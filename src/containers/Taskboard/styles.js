const styles = (theme) => ({
  taskboard: {
    alignItems: "center",
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  shape: {
    padding: 20,
    margin: 10,
    backgroundColor: theme.color.primary,
    color: theme.shape.textColor
  },
})

export default styles;