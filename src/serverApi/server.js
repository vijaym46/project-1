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

/* Shopdetails API */
export const getCategoryMenuData = async (category_menu_option_id) => {
    const url = `${serverUrl}/api/category/get_category_menu_fields`;
    const payload = { category_menu_option_id };
    
    try {
        const response = await axios.post(url, payload);
        console.log('API Response:', response);
        return response.data;
    } catch (error) {
        console.error('Error fetching category menu data:', error);
        throw error;
    }
};

/* Login API */
export const loginUserAPI = async (email, password, category_menu_option_id) => {
    const url = `${serverUrl}/api/login_panel/login_user`;
    const payload = { email, password, category_menu_option_id };

    try {
        const loginResponse = await axios.post(url, payload);
        console.log('Login Response:', loginResponse);
        return loginResponse;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

/* Register API */
export const registerUserAPI = async (formData) => {
    const url = `${serverUrl}/api/login_panel/register_user`;
    const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        phone_number: formData.phoneNumber,
        building_number: formData.flat,
        street: formData.street,
        zip_code: formData.zipCode,
        city: formData.city,
        state: formData.state,
        company_name: formData.companyName
    };

    try {
        const response = await axios.post(url, payload);
        console.log('Registration Response:', response);
        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};