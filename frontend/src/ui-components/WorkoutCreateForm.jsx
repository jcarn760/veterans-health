/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createWorkout } from "../graphql/mutations";
const client = generateClient();
export default function WorkoutCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    workout_name: "",
    feel: "",
  };
  const [workout_name, setWorkout_name] = React.useState(
    initialValues.workout_name
  );
  const [feel, setFeel] = React.useState(initialValues.feel);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setWorkout_name(initialValues.workout_name);
    setFeel(initialValues.feel);
    setErrors({});
  };
  const validations = {
    workout_name: [{ type: "Required" }],
    feel: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          workout_name,
          feel,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createWorkout.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "WorkoutCreateForm")}
      {...rest}
    >
      <TextField
        label="Workout name"
        isRequired={true}
        isReadOnly={false}
        value={workout_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              workout_name: value,
              feel,
            };
            const result = onChange(modelFields);
            value = result?.workout_name ?? value;
          }
          if (errors.workout_name?.hasError) {
            runValidationTasks("workout_name", value);
          }
          setWorkout_name(value);
        }}
        onBlur={() => runValidationTasks("workout_name", workout_name)}
        errorMessage={errors.workout_name?.errorMessage}
        hasError={errors.workout_name?.hasError}
        {...getOverrideProps(overrides, "workout_name")}
      ></TextField>
      <TextField
        label="Feel"
        isRequired={true}
        isReadOnly={false}
        value={feel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              workout_name,
              feel: value,
            };
            const result = onChange(modelFields);
            value = result?.feel ?? value;
          }
          if (errors.feel?.hasError) {
            runValidationTasks("feel", value);
          }
          setFeel(value);
        }}
        onBlur={() => runValidationTasks("feel", feel)}
        errorMessage={errors.feel?.errorMessage}
        hasError={errors.feel?.hasError}
        {...getOverrideProps(overrides, "feel")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
