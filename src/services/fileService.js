import * as FileSystem from 'expo-file-system';
const movieDirectory = `${FileSystem.documentDirectory}movies`;


const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
}

export const loadMovie = async fileName => {
    return await onException(() => FileSystem.readAsStringAsync(`${movieDirectory}/${fileName}`, {
        encoding: FileSystem.EncodingType.UTF8
    }));
}

const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(movieDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(movieDirectory);
    }
}

export const getAllMovies = async () => {
    await setupDirectory();
    const result = await onException(() => FileSystem.readDirectoryAsync(movieDirectory));
    return Promise.all(result.map(async fileName => {
        return {
            name: fileName,
            type: 'string',
            file: await loadMovie(fileName)
        };
    }));
}

const accessToken = useSelector(selectToken);
        const dispatch = useDispatch();
        const credentials = {
            username: `${USERNAME}`,
            password: `${PASSWORD}`
        }
        dispatch(authenticate(credentials));
        console.log("ACCESS TOKEN", credentials);
        axios.get('https://api.kvikmyndir.is/upcoming', {
            params: {token: accessToken},
        })
            .then(({data}) => {
                const upcomingList = data.map((m) => {
                    const movie = JSON.parse(m.file);
                });
                console.log("UPCOMING LIST", upcomingList);
                return upcomingList;
            })