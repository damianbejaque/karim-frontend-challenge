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
  const [handleError, setHandleError] = useState(false);
  const [isAmountFocused, setIsAmountFocused] = useState(false);
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

    // For amount field, only allow numeric input
    if (name === "amount") {
      // Remove all non-numeric characters except decimal point
      let numericValue = value.replace(/[^0-9.]/g, "");

      // Ensure only one decimal point
      const parts = numericValue.split(".");
      if (parts.length > 2) {
        numericValue = parts[0] + "." + parts.slice(1).join("");
      }

      // Limit to 2 decimal places
      if (parts[1] && parts[1].length > 2) {
        numericValue = parts[0] + "." + parts[1].slice(0, 2);
      }

      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear handle error when user types
    if (name === "handle") {
      setHandleError(false);
    }

    // Validate field on change
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, name === "amount" ? value.replace(/[^0-9.]/g, "") : value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }

    // Show warning if fields are filled and valid
    const currentHandle = name === "handle" ? value : formData.handle;
    const currentAmount = name === "amount" ? value.replace(/[^0-9.]/g, "") : formData.amount;

    if (currentHandle && currentAmount) {
      const handleErr = validateField("handle", currentHandle);
      const amountErr = validateField("amount", currentAmount);
      setShowWarning(!handleErr && !amountErr && !handleError);
    } else {
      setShowWarning(false);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Mark field as touched
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate the field
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    // Handle amount field blur
    if (name === "amount") {
      setIsAmountFocused(false);
    }
  };

  const handleAmountFocus = () => {
    setIsAmountFocused(true);
  };

  // Get formatted amount for display
  const getDisplayAmount = () => {
    if (isAmountFocused || !formData.amount) {
      return formData.amount;
    }

    const num = parseFloat(formData.amount);
    if (isNaN(num)) {
      return formData.amount;
    }

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
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

    // Check for specific handle that should fail
    if (formData.handle === "rail-wallet-negative-balance-02") {
      setHandleError(true);
      setShowWarning(false);
      return;
    }

    // Simulate API call
    console.log("Form data:", formData);

    // Call success callback
    if (onSuccess) {
      onSuccess("Transacción creada exitosamente", "La transacción se ha procesado correctamente.");
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
    setHandleError(false);
    setIsAmountFocused(false);
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

          {/* Handle Error Message */}
          {handleError && (
            <div className="mt-[-12px] flex items-start gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mt-0.5 shrink-0"
              >
                <path
                  d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM8 4C8.55228 4 9 4.44772 9 5V8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8V5C7 4.44772 7.44772 4 8 4ZM8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11C9 11.5523 8.55228 12 8 12Z"
                  fill="#F04438"
                />
              </svg>
              <p className="text-error-500 text-sm leading-5 font-normal">
                Este handle no existe o está deshabilitado. Verifica la información nuevamente.
              </p>
            </div>
          )}

          {/* Amount Field */}
          <Input
            label="Monto"
            name="amount"
            type="text"
            value={getDisplayAmount()}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={handleAmountFocus}
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
