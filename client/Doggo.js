import React, { useState } from "react";
import Footers from "./components/Footer";
import Sky from "./components/Sky";
import HeaderDog from "./components/HeaderDog";
import dayjs from "dayjs";
import {
  Box,
  Button,
  TextField,
  Typography,
  Input,
  InputAdornment,
  InputLabelProps,
  IconButton,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
//for custom file upload button
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import { styled } from "@mui/material/styles";
// import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
// import DateFnsUtils from '@date-io/date-fns';


const DogInputPage = () => {
  const [dogData, setDogData] = useState({
    name: "",
    age: "",
    weight: "",
    breed: "",
    meals: [],
    medications: [],
    groomers: [],
    miscellaneous: [],
    photo: null,
  });

  const handleChange = (e) => {
    if (e.target.name.startsWith("meal-")) {
      // Handle meal changes
      const index = parseInt(e.target.name.split("-")[1], 10);
      const field = e.target.name.split("-")[2];
      handleMealChange(index, field, e.target.value);
    } else {
      setDogData({ ...dogData, [e.target.name]: e.target.value });
    }
  };

  const handleMealChange = (index, field, value) => {
    const newMeals = [...dogData.meals];
    newMeals[index][field] = value;
    setDogData({ ...dogData, meals: newMeals });
  };

  const handleAddMeal = () => {
    const newMeal = { type: "", instructions: "", times: dayjs() };
    setDogData({ ...dogData, meals: [...dogData.meals, newMeal] });
  };

  const handleRemoveMeal = (index) => {
    const updatedMeals = dogData.meals.filter((_, i) => i !== index);
    setDogData({ ...dogData, meals: updatedMeals });
  };

  const handleMealTypeChange = (index, value) => {
    const updatedMeals = [...dogData.meals];
    updatedMeals[index].type = value;
    setDogData({ ...dogData, meals: updatedMeals });
  };

  // Handler for adding medication
  const handleAddMedication = () => {
    const addMedications = { name: "", instructions: "", date: dayjs() };
    setDogData({
      ...dogData,
      medications: [...dogData.medications, addMedications],
    });
  };

  // Handler for removing medication
  const handleRemoveMedication = (index) => {
    const removeMedications = dogData.medications.filter((_, i) => i !== index);
    setDogData({ ...dogData, medications: removeMedications });
  };

  // Handler for medication changes
  const handleMedicationChange = (index, field, value) => {
    const updateMedications = [...dogData.medications];
    updateMedications[index][field] = value;
    setDogData({ ...dogData, medications: updateMedications });
  };

  // Handler for groomers
  const handleAddGroomer = () => {
    const newGroomer = {
      name: "",
      time: dayjs(),
      date: dayjs(),
      instructions: "",
    };
    setDogData({ ...dogData, groomers: [...dogData.groomers, newGroomer] });
  };

  const handleGroomerChange = (index, field, value) => {
    const updatedGroomers = [...dogData.groomers];
    updatedGroomers[index][field] = value;
    setDogData({ ...dogData, groomers: updatedGroomers });
  };
  const handleRemoveGroomer = (index) => {
    const removeGroomer = dogData.groomers.filter((_, i) => i !== index);
    setDogData({ ...dogData, groomers: removeGroomer });
  };

  // Handler for adding misc
  const handleAddMisc = () => {
    const newMisc = {
      name: "",
      instructions: "",
      time: dayjs(),
      date: dayjs(),
    };
    setDogData({
      ...dogData,
      miscellaneous: [...dogData.miscellaneous, newMisc],
    });
  };

  // Handler for removing misc
  const handleRemoveMisc = (index) => {
    const newMisc = dogData.miscellaneous.filter((_, i) => i !== index);
    setDogData({ ...dogData, miscellaneous: newMisc });
  };

  // Handler for misc changes
  const handleMiscChange = (index, field, value) => {
    const newMisc = [...dogData.misc];
    newMisc[index][field] = value;
    setDogData({ ...dogData, misc: newMisc });
  };

  const handlePhotoChange = (e) => {
    setDogData({ ...dogData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dogData);
    // Submit logic here
  };

  // for file upload button
  // const VisuallyHiddenInput = styled("input")({
  //   clip: "rect(0 0 0 0)",
  //   clipPath: "inset(50%)",
  //   height: 1,
  //   overflow: "hidden",
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   whiteSpace: "nowrap",
  //   width: 1,
  // });


  const boxBorder = blue[50];

  return (
      <div>
        <Sky />
        <HeaderDog />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh" // Full screen height
          // sx={{ backgroundColor: 'pink' }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 3,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "rgba(255, 255, 255, 0.7)", //transparent
              border: 2,
              borderColor: boxBorder,
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              fontFamily={"Pixelify Sans"}
              sx={{
                color: "pink",
              //   textShadow:
              //     "-1px -1px white, 1px 1px hotpink, 3px 3px hotpink, 4px 4px 4px #9e9e9e",
              // }}
              textShadow:
                  "-1px -1px white, 1px 1px hotpink, 2px 2px hotpink, 3px 3px 3px #9e9e9e",
              }}
            >
              Add Your Dog's Information
            </Typography>
            <TextField
              label="Dog's Name"
              name="name"
              type="text"
              value={dogData.name}
              onChange={handleChange}
              required
              fullWidth
              autoFocus
              margin="normal"
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TextField
                label="Age"
                name="age"
                type="text"
                value={dogData.age}
                onChange={handleChange}
                required
                sx={{
                  m: 1,
                  flex: 1,
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              />
              <TextField
                label="Weight"
                name="weight"
                type="text"
                value={dogData.weight}
                onChange={handleChange}
                required
                sx={{
                  m: 1,
                  flex: 1,
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">lbs</InputAdornment>
                  ),
                }}
              />
            </Box>
            <TextField
              borderRadius="30"
              label="Breed"
              name="breed"
              type="text"
              fullWidth
              margin="normal"
              value={dogData.breed}
              onChange={handleChange}
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            />
            {/* handles meals adding/subtracting */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                mb: 2,
              }}
            >
              <Typography variant="h6" sx={{ mr: 2 }}>
                Add Meals
              </Typography>
              <IconButton onClick={handleAddMeal}>
                <AddCircleIcon color="primary" />
              </IconButton>
            </Box>

            {dogData.meals.map((meal, index) => (
              <Box key={index} sx={{ width: "100%", mb: 2 }}>
                <Typography sx={{ mr: 2, marginBottom: 2 }}>{`Meal ${
                  index + 1
                }:`}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <FormControl sx={{ mr: 1, flex: 1 }}>
                    <InputLabel htmlFor={`meal-type-select-${index}`}>
                      Meal Type
                    </InputLabel>
                    <Select
                      focused
                      labelId={`meal-type-label-${index}`}
                      label="Meal Type"
                      id={`meal-type-select-${index}`}
                      value={meal.type}
                      onChange={(e) =>
                        handleMealTypeChange(index, e.target.value)
                      }
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                      }}
                    >
                      <MenuItem value="Breakfast">Breakfast</MenuItem>
                      <MenuItem value="Lunch">Lunch</MenuItem>
                      <MenuItem value="Dinner">Dinner</MenuItem>
                      <MenuItem value="Snack">Snack</MenuItem>
                    </Select>
                  </FormControl>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label="Time"
                      name={`meal-${index}-time`}
                      value={meal.times}
                      onChange={(newTime) =>
                        handleMealChange(index, "times", newTime)
                      }
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                      }}
                      renderInput={(params) => (
                        <TextField {...params} sx={{ flex: 2 }} />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
                <TextField
                  label="Instructions:"
                  fullWidth
                  multiline
                  name={`meal-${index}-instructions`}
                  value={meal.instructions}
                  onChange={handleChange}
                  margin="normal"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />

                <IconButton onClick={() => handleRemoveMeal(index)}>
                  <RemoveCircleIcon color="primary" />
                </IconButton>
              </Box>
            ))}
            {/* handles meds adding/subtracting */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                mb: 2,
              }}
            >
              <Typography variant="h6" sx={{ mr: 2 }}>
                Add Medication
              </Typography>
              <IconButton onClick={handleAddMedication}>
                <AddCircleIcon color="primary" />
              </IconButton>
            </Box>

            {dogData.medications.map((medications, index) => (
              <Box key={index} sx={{ width: "100%", mb: 2 }}>
                <Typography sx={{ mr: 2, mb: 2 }}>{`Medication ${
                  index + 1
                }:`}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <FormControl sx={{ mr: 1, flex: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="Time"
                        name={`medications-${index}-time`}
                        value={medications.times}
                        onChange={(newTime) =>
                          handleMedicationChange(index, "times", newTime)
                        }
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "5px",
                        }}
                        renderInput={(params) => (
                          <TextField {...params} sx={{ flex: 2 }} />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date"
                      name={`medications-${index}-date`}
                      value={medications.times}
                      onChange={(newDate) =>
                        handleMedicationChange(index, "date", newTime)
                      }
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                      }}
                      renderInput={(params) => (
                        <TextField {...params} sx={{ flex: 2 }} />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
                <TextField
                  label="Instructions:"
                  fullWidth
                  multiline
                  name={`medications-${index}-instructions`}
                  value={medications.instructions}
                  onChange={handleChange}
                  margin="normal"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
                <IconButton onClick={() => handleRemoveMedication(index)}>
                  <RemoveCircleIcon color="primary" />
                </IconButton>
              </Box>
            ))}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                mb: 2,
              }}
            >
              <Typography variant="h6" sx={{ mr: 2 }}>
                Add Groomer
              </Typography>
              <IconButton onClick={handleAddGroomer}>
                <AddCircleIcon color="primary" />
              </IconButton>
            </Box>
            {/* handles groomers */}
            {dogData.groomers.map((groomers, index) => (
              <Box key={index} sx={{ width: "100%", mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  {/* <FormControl sx={{ mr: 1, flex: 1 }}>
                <InputLabel htmlFor={`groomers-type-select-${index}`} >Groomer Name</InputLabel>
                  <TextField
                    label="Groomer's Name"
                    type="text"
                    fullWidth
                    margin="normal"
                    value={groomers.name}
                    onChange={(e) => handleGroomerChange(index, 'name', e.target.value)}
                  />
                </FormControl> */}
                  <FormControl sx={{ mr: 1, flex: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="Time"
                        name={`groomers-${index}-time`}
                        value={groomers.times}
                        onChange={(newTime) =>
                          handleGroomerChange(index, "times", newTime)
                        }
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "5px",
                        }}
                        renderInput={(params) => (
                          <TextField {...params} sx={{ flex: 2 }} />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date"
                      name={`groomers-${index}-time`}
                      value={groomers.times}
                      onChange={(newDate) =>
                        handleGroomerChange(index, "date", newDate)
                      }
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                      }}
                      renderInput={(params) => (
                        <TextField {...params} sx={{ flex: 2 }} />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
                <TextField
                  label="Instructions"
                  multiline
                  fullWidth
                  margin="normal"
                  name={`groomers-${index}-instructions`}
                  value={groomers.instructions}
                  onChange={(e) =>
                    handleGroomerChange(index, "instructions", e.target.value)
                  }
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
                <IconButton onClick={() => handleRemoveGroomer(index)}>
                  <RemoveCircleIcon color="primary" />
                </IconButton>
              </Box>
            ))}

            {/* handles misc adding/subtracting */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                mb: 2,
              }}
            >
              <Typography variant="h6" sx={{ mr: 2 }}>
                Add Miscellaneous
              </Typography>
              <IconButton onClick={handleAddMisc}>
                <AddCircleIcon color="primary" />
              </IconButton>
            </Box>

            {dogData.miscellaneous.map((miscellaneous, index) => (
              <Box key={index} sx={{ width: "100%", mb: 2 }}>
                <Typography sx={{ mr: 2, marginBottom: 2 }}>{`Misc ${
                  index + 1
                }:`}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <FormControl sx={{ mr: 1, flex: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="Time"
                        name={`misc-${index}-time`}
                        value={miscellaneous.times}
                        onChange={(newTime) =>
                          handleMiscChange(index, "times", newTime)
                        }
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "5px",
                        }}
                        renderInput={(params) => (
                          <TextField {...params} sx={{ flex: 2 }} />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date"
                      name={`miscellaneous-${index}-date`}
                      value={miscellaneous.times}
                      onChange={(newDate) =>
                        handleMiscChange(index, "date", newTime)
                      }
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                      }}
                      renderInput={(params) => (
                        <TextField {...params} sx={{ flex: 2 }} />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
                <TextField
                  label="Instructions:"
                  fullWidth
                  multiline
                  name={`misc-${index}-instructions`}
                  value={miscellaneous.instructions}
                  onChange={handleChange}
                  margin="normal"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
                <IconButton onClick={() => handleRemoveMisc(index)}>
                  <RemoveCircleIcon color="primary" />
                </IconButton>
              </Box>
            ))}

            <Input
              type="file"
              name="photo"
              content="Upload File"
              onChange={handlePhotoChange}
              cursor="pointer"
              size="90"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Footers />
      </div>
  );
};

export default DogInputPage;
