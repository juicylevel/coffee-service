import createDataItem from './createDataItem';

export default snap => (
    snap.docs.map(docSnap => (
        createDataItem(docSnap)
    ))
);