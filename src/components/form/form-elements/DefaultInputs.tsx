import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import { CalenderIcon, EyeCloseIcon, EyeIcon, TimeIcon } from "../../../icons";
import Flatpickr from "react-flatpickr";

export default function DefaultInputs() {
  const [showPassword, setShowPassword] = useState(false);
  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleDateChange = (date: Date[]) => {
    setDateOfBirth(date[0].toLocaleDateString()); // Handle selected date and format it
  };
  return (
    <ComponentCard title="Default Inputs">
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Input</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label htmlFor="inputTwo">Input with Placeholder</Label>
          <Input type="text" id="inputTwo" placeholder="info@gmail.com" />
        </div>
        <div>
          <Label>Select Input</Label>
          <Select
            options={options}
            placeholder="Select an option"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <Label>Password Input</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
            >
              {showPassword ? (
                <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
              ) : (
                <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
              )}
            </button>
          </div>
        </div>
        <div>
          <Label htmlFor="datePicker">Date Picker Input</Label>
          <div className="relative w-full flatpickr-wrapper">
            <Flatpickr
              value={dateOfBirth} // Set the value to the state
              onChange={handleDateChange} // Handle the date change
              options={{
                dateFormat: "Y-m-d", // Set the date format
              }}
              placeholder="Select an option"
              className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700  dark:focus:border-brand-800"
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <CalenderIcon className="size-6" />
            </span>
          </div>
        </div>
        <div>
          <Label htmlFor="tm">Date Picker Input</Label>
          <div className="relative">
            <Input
              type="time"
              id="tm"
              name="tm"
              onChange={(e) => console.log(e.target.value)}
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <TimeIcon className="size-6" />
            </span>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
