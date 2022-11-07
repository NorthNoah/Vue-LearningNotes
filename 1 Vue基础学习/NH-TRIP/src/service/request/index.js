import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
class YXRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            // 实例带参请求结果，完成后回调then中的函数resolve
            this.instance.request(config).then(res => {
                // 为了将data传出去
                resolve(res.data)
            }).catch(err => {
                // 处理错误
                reject(err)
            })
        })
    }

    get(config) {
        // 追加method字段
        return this.request({ ...config, methods: "get" })
    }


    post(config) {
        // 追加method字段
        return this.request({ ...config, methods: "post" })
    }
}
// 注意不是return，而是需要export出去类的实例
export default new YXRequest(BASE_URL, TIMEOUT)