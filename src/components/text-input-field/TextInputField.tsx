import { AiFillInfoCircle } from "react-icons/ai";

export interface TextInputFieldProps {
  label: string;
  onChange: (value: string) => void;
  id: string;
  infoUrl?: string | null;
}

export function TextInputField({
  label,
  onChange,
  id,
  infoUrl = null,
}: TextInputFieldProps) {
  return (
    <div className="flex flex-col bg-background-dark p-2 m-2 border-white border rounded-lg w-96">
      <label htmlFor={id}>
        {label}
        {infoUrl ? (
          <a href={infoUrl} role="link" target="_blank" rel="noreferrer">
            <AiFillInfoCircle className="inline-block ml-2 text-white hover:text-red-500 transition-all" />
          </a>
        ) : null}
      </label>
      <input
        className="text-white bg-background-darker focus:border-turquois-500 border-2 rounded-lg p-2 outline-none"
        onChange={(e) => onChange(e.target.value)}
        id={id}
        type="text"
        role="text-input"
      />
    </div>
  );
}
