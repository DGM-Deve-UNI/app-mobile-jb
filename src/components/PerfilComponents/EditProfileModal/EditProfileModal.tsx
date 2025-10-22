import React from "react";
import { BaseModal } from "@/src/components/ui/BaseModal";
import { FormInput } from "@/src/components/ui/FormInput";
import { Button } from "@/src/components/ui/Button";
import { UserData } from "@/src/types/profile.types";

// Defina a interface aqui
export interface EditProfileModalProps {
  visible: boolean;
  onClose: () => void;
  editData: UserData;
  setEditData: (data: UserData) => void;
  onSave: () => void;
  successMessage: string;
  isDark: boolean;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  visible,
  onClose,
  editData,
  setEditData,
  onSave,
  successMessage,
  isDark,
}) => {
  const editFields = {
    name: "Nome Completo",
    email: "E-mail",
    phone: "Telefone",
    birthDate: "Data de Nascimento",
    address: "Endereço",
  };

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      title="Editar Perfil"
      successMessage={successMessage}
      isDark={isDark}
      actions={
        <>
          <Button
            title="Cancelar"
            onPress={onClose}
            variant="secondary"
            isDark={isDark}
          />
          <Button
            title="Salvar"
            onPress={onSave}
            variant="primary"
            isDark={isDark}
          />
        </>
      }
    >
      {Object.entries(editFields).map(([key, label]) => (
        <FormInput
          key={key}
          label={label}
          value={editData[key as keyof UserData]}
          onChangeText={(value) => setEditData({ ...editData, [key]: value })}
          placeholder={label}
          isDark={isDark}
        />
      ))}
    </BaseModal>
  );
};
