import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button';

export default function Download() {
  return (
    <div className="p-20">
        <div className='border-2 border-pink-500 rounded-lg flex flex-row bg-gradient-to-b from-pink-100 via-pink-50 to-white'>
            <div className='flex items-center justify-center w-2/6'>
                <img src="images/placeholder.png" alt="app" className="w-48 h-48 rounded-lg" />
            </div>


            <div className='m-8'>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Download WeddingBazaar app!</h1>
                <p className="text-lg text-gray-600 mb-8">Make your wedding planning easy and hassle-free</p>

                <div className="flex justify-center gap-8">
                    <Button
                        variant="contained"
                        startIcon={<PlayArrowIcon />}
                        className="flex flex-row items-center"
                        sx={{backgroundColor: "#000000"}}
                        >
                            <div className="flex flex-col items-center">
                                <p className="text-sm">Available in</p>
                                <h1 className="text-xl font-semibold">Google Play</h1>
                            </div>
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<AppleIcon />}
                        className="flex flex-row items-center"
                        sx={{backgroundColor: "#000000"}}
                        >
                            <div className="flex flex-col items-center">
                                <p className="text-sm">Available in</p>
                                <h1 className="text-xl font-semibold">App Store</h1>
                            </div>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
