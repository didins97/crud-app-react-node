// Fungsi untuk format respons sukses
const successResponse = (res, data = {}, message = 'Get data successfully', statusCode = 200) => {
    return res.status(statusCode).json({
      meta: {
        code: statusCode,
        status: "success",
        message: message
      },
      data: data
    });
  };
  
  // Fungsi untuk format respons kesalahan
  const errorResponse = (res, message = 'An error occurred', statusCode = 500, error = null) => {
    return res.status(statusCode).json({
      meta: {
        code: statusCode,
        status: "error",
        message: message
      },
      data: error
    });
  };
  
  // Ekspor fungsi untuk digunakan di tempat lain
  module.exports = { successResponse, errorResponse };
  