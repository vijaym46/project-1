import axios from 'axios';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const GetCategoryImagesAPI = async (category_menu) => {
    const url = `${serverUrl}/api/category/get_category_list`;
    console.log('serverUrl 11111111111',serverUrl)
    const payload = { category_menu }
    console.log('payload', payload)

    try {
        const GetCategoryImagesApiResponse = await axios.post(url, payload);
        console.log('\n 1111111111111111',GetCategoryImagesApiResponse)
        return GetCategoryImagesApiResponse;
    } catch (error) {
        return error;
    }
};

