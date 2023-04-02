import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { CreateBundleFormProps, ICreateBundleForm } from "./types";
import { SelectCustom } from "../../shared";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { ISelectCustomOption } from "../../shared/ui/selectCustom/types";

const schema = yup
  .object({
    position: yup
      .object()
      .shape({ label: yup.string().required("Не выбрана позиция") })
      .required("Не выбрана позиция"),
    relations: yup
      .array()
      .required("Не выбраны компании для позиции")
      .min(1, "Не выбраны компании для позиции"),
    title: yup.string().required("Не указано имя").min(1, "Не указано имя"),
  })
  .required();

export const CreateBundleForm: React.FC<CreateBundleFormProps> = ({
  relations,
  positions,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICreateBundleForm>({
    resolver: yupResolver(schema),
    reValidateMode: "onSubmit",
    defaultValues: {
      relations: null,
      position: null,
      title: "",
      description: "",
    },
  });

  const handleChangePositionSelect = (position: ISelectCustomOption | null) => {
    setValue("position", { name: position.label, id: position.id || "" });
  };

  const handleChangeRelationsSelect = (
    relations: ISelectCustomOption[] | null
  ) => {
    setValue(
      "relations",
      relations.map((relation) => ({
        name: relation.label,
        id: relation.id || "",
      }))
    );
  };

  const onSubmit: SubmitHandler<ICreateBundleForm> = (
    form: ICreateBundleForm
  ) => {
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h2" component="h2" marginBottom={4}>
        Новая связка
      </Typography>
      <Controller
        name="relations"
        control={control}
        render={({ field }) => (
          <SelectCustom
            options={relations.map((relation) => ({
              label: relation.name,
              id: relation.id,
            }))}
            label="Выбор компаний"
            fullWidth
            multiple
            onChangeSelect={handleChangeRelationsSelect}
            error={errors["relations"]?.message?.toString()}
            {...field}
          />
        )}
      />
      <Controller
        name="position"
        control={control}
        render={({ field }) => (
          <SelectCustom
            options={positions.map((position) => ({
              label: position.name,
              id: position.id,
            }))}
            label="Выбор позиции"
            fullWidth
            onChangeSelect={handleChangePositionSelect}
            error={errors["position"]?.message?.toString()}
            {...field}
          />
        )}
      />
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            label="Ваше имя"
            fullWidth
            {...field}
            error={!!errors["title"]?.message}
            helperText={errors["title"]?.message?.toString()}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            label="Краткое описание связки"
            rows={4}
            fullWidth
            multiline
            {...field}
            error={!!errors["description"]?.message}
            helperText={errors["description"]?.message?.toString()}
          />
        )}
      />
      <Button variant="contained" type="submit">
        Сохранить
      </Button>
    </form>
  );
};
