import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private token: string
  isLoggedIn = false

  constructor(private http: HttpClient, private router: Router, 
    private toastr: ToastrService) { }

  private baseurl = `${environment.baseurl}/getData`
  private Loginurl = `${environment.baseurl}/signIn`
  data:any=[];
  // private saveToken(token: string): void {
  //   localStorage.setItem('usertoken', token)
  //   this.token = token
  // }

  // private getToken(): string {
  //   if (!this.token) {
  //     this.token = localStorage.getItem('usertoken')
  //   }
  //   return this.token
  // }

  // public getUserDetails(): UserDetails {
  //   const token = this.getToken()
  //   let payload
  //   if (token) {
  //     payload = token.split('.')[1]
  //     payload = window.atob(payload)
  //     return JSON.parse(payload)
  //   } else {
  //     return null
  //   }
  // }
 
  // public isLoggedIn(): boolean {
  //   const user = this.getUserDetails()
  //   if (user) {
  //     return user.exp > Date.now() / 1000
  //   } else {
  //     return false
  //   }
  // }


    public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('user')
    if(userData && JSON.parse(userData)){
        return true;     
    }else{
        return false;
      }
    }

  //  public setUserInfo(user){
  //    return localStorage.setItem('userInfo', JSON.stringify(user));
  //  }

    login(email, password) {
     return this.http.post(this.Loginurl, {'username' : email, 'password' : password}).toPromise()
     .then(res=>{
         this.data= res;
       if(this.data.status == 'Successful')
       this.isLoggedIn= true;
       localStorage.setItem('user',JSON.stringify(this.data))
       this.router.navigate(['dashboard']);
       this.toastr.success("Heyy, You Logged In Successfully!");
    }).catch(err=>{
      this.toastr.warning("Something Went Wrong:",err.message);
        this.router.navigate(['login']);
    })
   }
  

   getData(){
    return this.http.get<any>(this.baseurl);
  }

  signOut(){
      this.router.navigate(['login']);
      localStorage.removeItem('user')
  }


}
