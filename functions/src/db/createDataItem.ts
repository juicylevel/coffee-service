export default docSnap => ({
    id: docSnap.id, 
    ...docSnap.data()
});