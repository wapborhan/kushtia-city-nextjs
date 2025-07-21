const useBloodGroup = () => {
  const bloodGroups = [
    { id: 1, name: "A+", label: "A+" },
    { id: 2, name: "A-", label: "A-" },
    { id: 3, name: "B+", label: "B+" },
    { id: 4, name: "B-", label: "B-" },
    { id: 5, name: "AB+", label: "AB+" },
    { id: 6, name: "AB-", label: "AB-" },
    { id: 7, name: "O+", label: "O+" },
    { id: 8, name: "O-", label: "O-" },
  ];

  return [bloodGroups];
};

export default useBloodGroup;
