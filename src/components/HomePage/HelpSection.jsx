import { Autocomplete, TextField, Button } from "@mui/material";

export default function HelpSection() {
  const vendors = [
    { label: "Makeup Artist" },
    { label: "Photographer" },
    { label: "Car" },
    { label: "DJ" },
  ];

  return (
    <div className="p-20 flex flex-col gap-7">
      <div>
        <h1 className="text-4xl font-bold">Help us with your details</h1>
        <h1 className="text-lg mt-2">
          Our executives will call you to understand your requirements to find
          suitable vendors
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-7 justify-center">
        <TextField
          id="outlined-basic"
          label="Enter your name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Enter mobile number"
          variant="outlined"
        />
        <Autocomplete
          disablePortal
          options={vendors}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search for Vendors" />
          )}
        />
        <Button
            variant="contained"
            sx={{
                padding: "12px 60px",
                fontSize: "18px",
                borderRadius: "8px",
                backgroundColor: "#ff3366",
                "&:hover": {
                backgroundColor: "#ff6699",
                },
                transition: "0.5s", 
            }}
        >Submit
        </Button>
      </div>
    </div>
  );
}
