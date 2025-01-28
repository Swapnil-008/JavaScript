const response = fetch('https://api.github.com/users/Swapnil-008')
// Two types of works are possible on fetch 
// 1) data / onfulfiled[] / onRejection[]
// 2) Web browser / node  --> network request (accept / reject)

// firsty second one will work, so it will access the API either Web browser base or either it will handle node base
// we want network request but we can't get the network request directly for that we require resource so either web browser will provide resource or either node will provide that resource
// then that network request will be either go on network or not
// if the network request sent on network then doesn't matter what is the response it will be just store in onfulfiled(resolve)
// if the network is not able to send then it will be stored in onRejection(reject)
// if any error occurs in your code still request will be sent and that error will be also stored in resolve (all the errors are also store in resolve because when that request reaches to network then only you got there is an error)
// so either request will be send or it will be not send so whatever we got in (onfulfiled[] / onRejection[]) it will be store in data and then data will return whatever it contains and it will be store in response on a global level