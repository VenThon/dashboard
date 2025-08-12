import { Label } from "./label";

const FieldLabel = ({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) => (
  <Label>
    <span className="text-xs md:text-sm">{label}</span>
    {required && <span className="ml-1 text-red-500">*</span>}
  </Label>
);

export { FieldLabel };
