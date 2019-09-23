import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
/* import { LoadingServices } from "./loadingservices";
import { ToastServices } from "./toastservices"; */
/* import { App } from "ionic-angular"; */
/* import { LoginPage } from "../pages/login/login"; */

/**
 * 声明的服务调用后如果报错：Can't resolve all parameters for 服务名称: (?).
 * 问题所在：没有声明@Injectable()
 */
@Injectable()
export class http {
    /* private serviceAdd = "192.168.3.245"; */
    private serviceAdd = "http://localhost:3000";
    public http;

    constructor(
        Http: HttpClient
        /* private loadSer: LoadingServices,
        private toastSer: ToastServices, */
    ) {
        this.http = Http;
    }

    public get(url: any, params: Object, res?: Function) {
        /* let loading = this.loadSer.presentLoading("正在" + message + "，请稍候..."); */
        try {
            /* loading.present(); */
            let that: this = this;
            that.http.get(that.serviceAdd + "/users" + url, { params })
                .subscribe(result => {
                    /* loading.dismiss(); */
                    /**
                     * 在此处校验返回结果是否是token为空，是则跳转至登录页
                     */
                    /* if (result.code == -1101001 || result.code == 1101002 || -result.code == -1101003) {
                        let alert = that.toastSer.presentAlert("警告", "用户信息已过期，请重新登录");
                        alert.present();
                        alert.onDidDismiss(() => {
                            this.app.getRootNav().setRoot(LoginPage);
                        })
                        return;
                    } */
                    res(result);
                }, error => {
                    /* loading.dismiss();
                    that.toastSer.presentAlert("警告", message + "失败，请重试").present(); */
                });
        } catch (error) {
            /* loading.dismiss();
            this.toastSer.presentAlert("警告", message + "失败，请重试").present(); */
        }

    }

    public post(url, message, body?: any, options?: { params?: HttpParams | { [param: string]: string | string[]; } }, res?: Function) {
        /* let loading = this.loadSer.presentLoading("正在" + message + "，请稍候..."); */
        try {
            let that: this = this;
            /* loading.present(); */
            that.http.post(that.serviceAdd + "/edi.stocktask_Web/v1/" + url, body, options)
                .subscribe(result => {
                    /* loading.dismiss(); */
                    /**
                     * 在此处校验返回结果是否是token为空，是则跳转至登录页
                     */
                    /* if (result.code == -1101001 || result.code == -1101002 || result.code == -1101003) {
                        let alert = that.toastSer.presentAlert("警告", "用户信息已过期，请重新登录");
                        alert.present();
                        alert.onDidDismiss(() => {
                            that.app.getRootNav().setRoot(LoginPage);
                        })
                        return;
                    } */
                    res(result);
                }, error => {
                    /* loading.dismiss();
                    that.toastSer.presentAlert("警告", message + "失败，请重试").present(); */
                });
        } catch (error) {
            /* loading.dismiss();
            this.toastSer.presentAlert("警告", message + "失败，请重试").present(); */
        }
    }

    public put(url, message, body?: any, options?: { params?: HttpParams | { [param: string]: string | string[]; } }, res?: Function) {
        /* let loading = this.loadSer.presentLoading("正在" + message + "，请稍候..."); */
        try {
            let that: this = this;
            /* loading.present(); */
            that.http.put(that.serviceAdd + "/edi.stocktask_Web/v1/" + url, body, options)
                .subscribe(result => {
                    /* loading.dismiss(); */
                    /**
                     * 在此处校验返回结果是否是token为空，是则跳转至登录页
                     */
                    /* if (result.code == -1101001 || result.code == -1101002 || result.code == -1101003) {
                        let alert = that.toastSer.presentAlert("警告", "用户信息已过期，请重新登录");
                        alert.present();
                        alert.onDidDismiss(() => {
                            that.app.getRootNav().setRoot(LoginPage);
                        })
                        return;
                    } */
                    res(result);
                }, error => {
                    /* loading.dismiss();
                    that.toastSer.presentAlert("警告", message + "失败，请重试").present(); */
                })
        } catch (error) {
            /* loading.dismiss();
            this.toastSer.presentAlert("警告", message + "失败，请重试").present(); */
        }
        /* .then(resu =>{

        })
        .error(error =>{

        }) */
    }

    /* public delete(url, message, params?: Object, res?: Function) {
        let loading = this.loadSer.presentLoading("正在" + message + "，请稍候...");
        try {
            loading.present();
            let that: this = this;
            let httpParams = new HttpParams();
            if (params) {
                for (const key in params) {
                    if (params[key]) {
                        httpParams = httpParams.set(key, params[key]);
                    }
                }
            }
            that.http.delete(that.serviceAdd + "/edi.stocktask_Web/v1/" + url, { params: httpParams })
                .subscribe(result => {
                    loading.dismiss();
                    if (result.code == -1101001 || result.code == -1101002 || result.code == -1101003) {
                        let alert = this.toastSer.presentAlert("警告", "用户信息已过期，请重新登录");
                        alert.present();
                        alert.onDidDismiss(() => {
                            that.app.getRootNav().setRoot(LoginPage);
                        })
                        return;
                    }
                    res(result);
                }, error => {
                    loading.dismiss();
                    that.toastSer.presentAlert("警告", message + "失败，请重试").present();
                });
        } catch (error) {
            loading.dismiss();
            this.toastSer.presentAlert("警告", message + "失败，请重试").present();
        }
    }

    public logOut(url, message, params?: Object, res?: Function) {
        let loading = this.loadSer.presentLoading("正在" + message + "，请稍候...");
        try {
            let that: this = this;
            let httpParams = new HttpParams();
            if (params) {
                for (const key in params) {
                    if (params[key]) {
                        httpParams = httpParams.set(key, params[key]);
                    }
                }
            }
            that.http.delete(that.serviceAdd + "/edi.initialfantasy_Web/v1/" + url, { params: httpParams })
                .subscribe(result => {
                    loading.dismiss();
                    if (result.code == -1101001 || result.code == -1101002 || result.code == -1101003) {
                        that.app.getRootNav().setRoot(LoginPage);
                        return;
                    }
                    res(result);
                }, error => {
                    loading.dismiss();
                    this.toastSer.presentAlert("警告", message + "失败，请重试").present();
                });
        } catch (error) {
            loading.dismiss();
            this.toastSer.presentAlert("警告", message + "失败，请重试").present();
        }
    } */
}