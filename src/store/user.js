import $ from 'jquery';
const ModuleUser = {
    state: {
        username: "",
        id: "",
        photo: "",
        followerCount: "",
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        login(context, data) {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/api/token/",
                type: "POST",
                data: {
                    username: data.username,
                    password: data.password,
                },
                success(resp) {
                    console.log(resp);
                }
            })
        }
    },
    module: {

    },
}
export default ModuleUser;