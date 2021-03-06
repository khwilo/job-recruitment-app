export const fetchCandidates = async () => {
  try {
    const response = await fetch('http://localhost:4000/candidates');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchCandidate = async (id) => {
  try {
    const response = await fetch(`http://localhost:4000/candidates/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchCandidateApplication = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:4000/candidates/${id}/applications`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
