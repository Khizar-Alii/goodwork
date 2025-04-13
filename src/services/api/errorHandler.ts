import { AxiosError } from 'axios';

export const handleApiError = (error: AxiosError) => {
  if (error.response) {
    const status = error.response.status;
    switch (status) {
      case 401:
        console.warn('Unauthorized. Redirect to login.');
        break;
      case 403:
        console.warn('Forbidden.');
        break;
      case 500:
        console.error('Server error.');
        break;
      default:
        console.warn(error.response.data);
        break;
    }
  } else {
    console.error('Network error or timeout');
  }
};
