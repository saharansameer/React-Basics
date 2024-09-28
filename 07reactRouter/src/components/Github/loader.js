export const getGitInfo = async () => {
    const response = await fetch(`https://api.github.com/users/sameer-saharan`);
    return response.json();
}