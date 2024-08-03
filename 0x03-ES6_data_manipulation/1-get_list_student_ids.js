export default function getListStudentIds(array) {
	return Array.isArray(array) ? array.map((arr) => arr.id) : [];
}
