# Introduction #

BCycle's API uses a REST style service for providing data to applications.


# Details #

The REST based web services are located at: http://api.bcycle.com/Services/Mobile.svc

You can place a request by appending the parameters for your request at the end of the URL above. For example, to receive a JSON request listing all the kiosks in the system, you would GET the URL http://api.bcycle.com/services/mobile.svc/ListKiosks

Accepted parameters are:
  * ListKiosks
  * VoteForLocation
  * ListLeaderBoardStats
  * GetSystemStatistics