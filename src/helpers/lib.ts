interface UpperNameProps {
    name: string
}

const upperName = ({name}:UpperNameProps) => name.toUpperCase()

export default upperName