import { Autocomplete, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function SearchBar() {
  const vendors = [
    { label: "Makeup Artist" },
    { label: "Photographer" },
    { label: "Car" },
    { label: "DJ" },
  ];

  const location = [
    { label: "Dhaka" },
    { label: "Sylhet" },
    { label: "Khulna" },
    { label: "Rajshahi" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center bg-white px-10 py-10 rounded-lg shadow-lg">
      <Autocomplete
        disablePortal
        options={vendors}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search for Vendors" />}
      />

      <Autocomplete
        disablePortal
        options={location}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search for Location" />}
      />

        <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
                padding: "12px 60px",
                fontSize: "18px",
                borderRadius: "8px",
                backgroundColor: "#ff3366",
              }}
            >
            Search
        </Button>
    </div>
  );
}
