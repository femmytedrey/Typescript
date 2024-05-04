type StyleProps = {
    style: React.CSSProperties
}
export const Style = (props: StyleProps) => {
    return <span style={props.style}>STYLING</span>
}