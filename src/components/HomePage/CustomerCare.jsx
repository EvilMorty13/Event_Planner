import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';

export default function CustomerCare() {
  return (
    <div className="p-10 md:p-20 flex flex-col md:flex-row items-center gap-10">
      <img 
        src="images/placeholder.png" 
        alt="placeholder" 
        className="w-full md:w-2/6 rounded-lg shadow-lg"
      />
      <div className="text-center md:text-left space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          Choose Wedassist and find your suitable vendor quickly with our personal executive
        </h1>
        
        <div className="space-y-4 text-lg text-gray-700">
          <p className="flex items-center gap-3">
            <CheckCircleOutlineIcon className="text-green-500" />
            Get WedAssist to get an exclusive Relationship Executive
          </p>
          <p className="flex items-center gap-3">
            <CheckCircleOutlineIcon className="text-green-500" />
            Our executive will understand your requirements for vendors
          </p>
          <p className="flex items-center gap-3">
            <CheckCircleOutlineIcon className="text-green-500" />
            This executive will shortlist, contact & finalize vendors on your behalf
          </p>
        </div>

        <Button 
          variant="contained" 
          endIcon={<EastIcon />} 
          sx={{
            padding: "12px 30px",
            fontSize: "16px",
            borderRadius: "8px",
            backgroundColor: "#ff3366",
            "&:hover": { backgroundColor: "#ff6699" },
          }}
        >
          Explore Now
        </Button>
      </div>
    </div>
  );
}
