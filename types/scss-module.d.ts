interface ScssModuleClasses {
  menuBackground: string
  menuColor: string
}

declare module '*.module.scss' {
  const classes: Readonly<ScssModuleClasses>
  export default classes
}
