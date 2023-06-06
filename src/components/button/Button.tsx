export interface ButtonProps {
    onPress: () => void;
    label: string;
    classOverride: string;
}

export default function Button({ onPress, label, classOverride }: ButtonProps) {
    return (
        <button onClick={onPress} className={classOverride}>{label}</button>
    )
}