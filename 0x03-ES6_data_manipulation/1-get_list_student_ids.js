const getListStudentIds = (array) => {
	return Array.isArray(array) ? array.map((arr) => arr.id) : [];
};

export default getListStudentIds;
