export const fetchCandidates = async () => {
  try {
    const response = await fetch('http://localhost:4000/candidates');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
