/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUser } from "../graphql/queries";
import { updateUser } from "../graphql/mutations";
const client = generateClient();
export default function UserUpdateForm(props) {
  const {
    id: idProp,
    user: userModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    first_name: "",
    last_name: "",
    date_birth: "",
    height: "",
    weigth: "",
    gender: "",
    health_goal: "",
    profile: false,
  };
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [date_birth, setDate_birth] = React.useState(initialValues.date_birth);
  const [height, setHeight] = React.useState(initialValues.height);
  const [weigth, setWeigth] = React.useState(initialValues.weigth);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [health_goal, setHealth_goal] = React.useState(
    initialValues.health_goal
  );
  const [profile, setProfile] = React.useState(initialValues.profile);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord }
      : initialValues;
    setFirst_name(cleanValues.first_name);
    setLast_name(cleanValues.last_name);
    setDate_birth(cleanValues.date_birth);
    setHeight(cleanValues.height);
    setWeigth(cleanValues.weigth);
    setGender(cleanValues.gender);
    setHealth_goal(cleanValues.health_goal);
    setProfile(cleanValues.profile);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUser.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUser
        : userModelProp;
      setUserRecord(record);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [userRecord]);
  const validations = {
    first_name: [],
    last_name: [],
    date_birth: [],
    height: [],
    weigth: [],
    gender: [],
    health_goal: [],
    profile: [],
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
          first_name: first_name ?? null,
          last_name: last_name ?? null,
          date_birth: date_birth ?? null,
          height: height ?? null,
          weigth: weigth ?? null,
          gender: gender ?? null,
          health_goal: health_goal ?? null,
          profile: profile ?? null,
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
            query: updateUser.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserUpdateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name: value,
              last_name,
              date_birth,
              height,
              weigth,
              gender,
              health_goal,
              profile,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name: value,
              date_birth,
              height,
              weigth,
              gender,
              health_goal,
              profile,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <TextField
        label="Date birth"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date_birth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_birth: value,
              height,
              weigth,
              gender,
              health_goal,
              profile,
            };
            const result = onChange(modelFields);
            value = result?.date_birth ?? value;
          }
          if (errors.date_birth?.hasError) {
            runValidationTasks("date_birth", value);
          }
          setDate_birth(value);
        }}
        onBlur={() => runValidationTasks("date_birth", date_birth)}
        errorMessage={errors.date_birth?.errorMessage}
        hasError={errors.date_birth?.hasError}
        {...getOverrideProps(overrides, "date_birth")}
      ></TextField>
      <TextField
        label="Height"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={height}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_birth,
              height: value,
              weigth,
              gender,
              health_goal,
              profile,
            };
            const result = onChange(modelFields);
            value = result?.height ?? value;
          }
          if (errors.height?.hasError) {
            runValidationTasks("height", value);
          }
          setHeight(value);
        }}
        onBlur={() => runValidationTasks("height", height)}
        errorMessage={errors.height?.errorMessage}
        hasError={errors.height?.hasError}
        {...getOverrideProps(overrides, "height")}
      ></TextField>
      <TextField
        label="Weigth"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={weigth}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_birth,
              height,
              weigth: value,
              gender,
              health_goal,
              profile,
            };
            const result = onChange(modelFields);
            value = result?.weigth ?? value;
          }
          if (errors.weigth?.hasError) {
            runValidationTasks("weigth", value);
          }
          setWeigth(value);
        }}
        onBlur={() => runValidationTasks("weigth", weigth)}
        errorMessage={errors.weigth?.errorMessage}
        hasError={errors.weigth?.hasError}
        {...getOverrideProps(overrides, "weigth")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_birth,
              height,
              weigth,
              gender: value,
              health_goal,
              profile,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Health goal"
        isRequired={false}
        isReadOnly={false}
        value={health_goal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_birth,
              height,
              weigth,
              gender,
              health_goal: value,
              profile,
            };
            const result = onChange(modelFields);
            value = result?.health_goal ?? value;
          }
          if (errors.health_goal?.hasError) {
            runValidationTasks("health_goal", value);
          }
          setHealth_goal(value);
        }}
        onBlur={() => runValidationTasks("health_goal", health_goal)}
        errorMessage={errors.health_goal?.errorMessage}
        hasError={errors.health_goal?.hasError}
        {...getOverrideProps(overrides, "health_goal")}
      ></TextField>
      <SwitchField
        label="Profile"
        defaultChecked={false}
        isDisabled={false}
        isChecked={profile}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_birth,
              height,
              weigth,
              gender,
              health_goal,
              profile: value,
            };
            const result = onChange(modelFields);
            value = result?.profile ?? value;
          }
          if (errors.profile?.hasError) {
            runValidationTasks("profile", value);
          }
          setProfile(value);
        }}
        onBlur={() => runValidationTasks("profile", profile)}
        errorMessage={errors.profile?.errorMessage}
        hasError={errors.profile?.hasError}
        {...getOverrideProps(overrides, "profile")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
