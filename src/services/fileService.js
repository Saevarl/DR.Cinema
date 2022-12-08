import * as FileSystem from 'expo-file-system';

const accessTokenDirectory = `${FileSystem.documentDirectory}token`;

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

export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(accessTokenDirectory);
}

export const addToken = async token => {
    await setupDirectory();
    const tokenFile = `${accessTokenDirectory}/token.json`;
    await onException(() => FileSystem.writeAsStringAsync(tokenFile, JSON.stringify(token), { encoding: FileSystem.EncodingType.UTF8 }));

    return {
        file: await loadToken()
    };
    
}
export const remove = async () => {
    const tokenFile = `${accessTokenDirectory}/token.json`;
    return await onException(() => FileSystem.deleteAsync(tokenFile, { idempotent: true }));
}

export const loadToken = async () => {
    const tokenFile = `${accessTokenDirectory}/token.json`;
    const token = await onException(() => FileSystem.readAsStringAsync(tokenFile, { encoding: FileSystem.EncodingType.UTF8 }));
    return JSON.parse(token);
}

const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(accessTokenDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(accessTokenDirectory);
    }
}
