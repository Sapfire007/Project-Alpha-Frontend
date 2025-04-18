
export const processTextFile = async (file: File): Promise<any> => {
  try {
    const text = await file.text();
    // Here we would normally process the text and create JSON
    // For demo purposes, we'll create a mock response
    const response = {
      timestamp: new Date().toISOString(),
      filename: file.name,
      data: {
        hemoglobin: "12.5 g/dL",
        whiteBloodCells: "7.5 x10^9/L",
        platelets: "250 x10^9/L",
        abnormalities: ["Slightly elevated white blood cells", "Normal hemoglobin"]
      }
    };
    
    return response;
  } catch (error) {
    console.error('Error processing file:', error);
    throw error;
  }
};
