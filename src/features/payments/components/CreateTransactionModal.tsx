import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { Button } from "@/components/ui";
import { AlertTriangleIcon } from "@/components/icons";

interface CreateTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (message: string) => void;
}

interface FormErrors {
  schema?: string;
  handle?: string;
  amount?: string;
  wallet?: string;
}

export default function CreateTransactionModal({
  isOpen,
  onClose,
  onSuccess,
}: CreateTransactionModalProps) {
  const [formData, setFormData] = useState({
    schema: "Limit",
    handle: "",
    amount: "",
    wallet: "provedores-pay",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showWarning, setShowWarning] = useState(false);
  const [touched, setTouched] = useState({
    handle: false,
    amount: false,
  });

  const schemaOptions = [
    { value: "Limit", label: "Limit" },
    { value: "Instant", label: "Instant" },
    { value: "Scheduled", label: "Scheduled" },
  ];

  const walletOptions = [
    { value: "provedores-pay", label: "provedores-pay" },
    { value: "clientes-pay", label: "clientes-pay" },
    { value: "general-pay", label: "general-pay" },
  ];

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "handle":
        if (!value.trim()) {
          return "El handle es requerido";
        }
        if (value.length < 3) {
          return "El handle debe tener al menos 3 caracteres";
        }
        return undefined;
      case "amount":
        if (!value.trim()) {
          return "El monto es requerido";
        }
        const numValue = parseFloat(value.replace(/[^0-9.]/g, ""));
        if (isNaN(numValue) || numValue <= 0) {
          return "El monto debe ser mayor a 0";
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate field on change
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }

    // Show warning if fields are filled and valid
    if (value && formData.handle && formData.amount) {
      const handleError = validateField("handle", name === "handle" ? value : formData.handle);
      const amountError = validateField("amount", name === "amount" ? value : formData.amount);
      setShowWarning(!handleError && !amountError);
    } else {
      setShowWarning(false);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const handleError = validateField("handle", formData.handle);
    const amountError = validateField("amount", formData.amount);

    if (handleError) newErrors.handle = handleError;
    if (amountError) newErrors.amount = amountError;

    setErrors(newErrors);
    setTouched({ handle: true, amount: true });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    // Simulate API call
    console.log("Form data:", formData);

    // Call success callback
    if (onSuccess) {
      onSuccess("Transacción creada exitosamente");
    }

    // Reset and close
    handleCancel();
  };

  const handleCancel = () => {
    setFormData({
      schema: "Limit",
      handle: "",
      amount: "",
      wallet: "provedores-pay",
    });
    setErrors({});
    setTouched({ handle: false, amount: false });
    setShowWarning(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCancel} title="Crear transacción" maxWidth="md">
      <div className="flex flex-col gap-5">
        {/* Description */}
        <p className="text-sm leading-5 font-normal text-gray-600">
          Completa los datos para continuar.
        </p>

        {/* Form Fields */}
        <div className="flex flex-col gap-5">
          {/* Schema Field */}
          <Select
            label="Schema"
            name="schema"
            value={formData.schema}
            onChange={handleInputChange}
            options={schemaOptions}
          />

          {/* Handle Field */}
          <Input
            label="Handle"
            name="handle"
            value={formData.handle}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Escribe el handle aquí"
            error={errors.handle}
          />

          {/* Amount Field */}
          <Input
            label="Monto"
            name="amount"
            type="text"
            value={formData.amount}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="$0.00"
            error={errors.amount}
          />

          {/* Wallet Field */}
          <Select
            label="Wallet"
            name="wallet"
            value={formData.wallet}
            onChange={handleInputChange}
            options={walletOptions}
          />
        </div>

        {/* Warning Message */}
        {showWarning && (
          <div className="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <AlertTriangleIcon className="mt-0.5 shrink-0 text-yellow-600" />
            <p className="text-sm leading-5 font-normal text-gray-700">
              Revisa bien los datos antes de crear la transacción.
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Crear interacción
          </Button>
        </div>
      </div>
    </Modal>
  );
}
