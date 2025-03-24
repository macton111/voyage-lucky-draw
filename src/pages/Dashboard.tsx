
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Ticket, 
  Clock, 
  CreditCard, 
  Award, 
  Calendar, 
  Star, 
  ChevronRight, 
  Bell, 
  DollarSign 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReferralSystem from '@/components/ReferralSystem';
import PaymentPopup from '@/components/PaymentPopup';
import { useIsMobile } from '@/hooks/use-mobile';

const Dashboard = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState("overview");
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const isMobile = useIsMobile();
  const [userData, setUserData] = useState({
    name: "Aminata Diallo",
    status: "active", // active, pending, selected
    nextDrawDate: "2023-08-15T00:00:00Z",
    paymentStatus: "paid", // paid, pending, unpaid
    participations: [
      { id: 1, date: "2023-07-01", status: "not_selected", paid: true },
      { id: 2, date: "2023-06-01", status: "not_selected", paid: true },
      { id: 3, date: "2023-05-01", status: "not_selected", paid: true },
    ],
    notifications: [
      { id: 1, title: "Payment Confirmed", description: "Your payment for August draw has been confirmed.", date: "2023-07-29T10:25:00Z", read: false },
      { id: 2, title: "Draw Results", description: "The July draw has concluded. Check your status.", date: "2023-07-15T16:30:00Z", read: true },
      { id: 3, title: "Payment Reminder", description: "Your payment for July draw is due soon.", date: "2023-06-28T09:15:00Z", read: true },
    ]
  });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const formatDateRelative = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return formatDate(dateString);
    }
  };
  
  const handleMakePayment = () => {
    setPaymentDialogOpen(true);
  };
  
  const getDaysUntilDraw = () => {
    const drawDate = new Date(userData.nextDrawDate);
    const now = new Date();
    const diffTime = Math.abs(drawDate.getTime() - now.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "selected":
        return "bg-voyage-success text-white";
      case "not_selected":
        return "bg-voyage-error text-white";
      case "pending":
        return "bg-voyage-warning text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case "selected":
        return "Selected";
      case "not_selected":
        return "Not Selected";
      case "pending":
        return "Pending";
      default:
        return "Unknown";
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {userData.name}</p>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <Button 
                onClick={handleMakePayment}
                className="w-full sm:w-auto bg-voyage-primary hover:bg-voyage-secondary rounded-xl py-4 sm:py-6 px-4 sm:px-6"
              >
                <DollarSign className="h-5 w-5 mr-2" />
                Make Payment
              </Button>
            </div>
          </div>
          
          <Tabs 
            defaultValue="overview" 
            value={currentTab}
            onValueChange={setCurrentTab}
            className="space-y-6"
          >
            <TabsList className={`grid grid-cols-3 ${isMobile ? 'w-full' : 'md:w-[400px]'} bg-white shadow-subtle`}>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6 animate-fade-in">
              {/* Status Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Next Draw Card */}
                <Card className="bg-white shadow-subtle hover:shadow-elevated transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Calendar className="h-5 w-5 mr-2 text-voyage-primary" />
                      Next Draw
                    </CardTitle>
                    <CardDescription>
                      {formatDate(userData.nextDrawDate)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold">{getDaysUntilDraw()}</span>
                        <span className="text-gray-600 ml-1">days left</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-voyage-primary mr-1" />
                        <span className="text-sm text-gray-600">Countdown</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Payment Status Card */}
                <Card className="bg-white shadow-subtle hover:shadow-elevated transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <CreditCard className="h-5 w-5 mr-2 text-voyage-primary" />
                      Payment Status
                    </CardTitle>
                    <CardDescription>
                      For August 2023 Draw
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`h-3 w-3 rounded-full ${
                          userData.paymentStatus === 'paid' ? 'bg-voyage-success' : 
                          userData.paymentStatus === 'pending' ? 'bg-voyage-warning' : 
                          'bg-voyage-error'
                        } mr-2`}></div>
                        <span className="font-medium">{
                          userData.paymentStatus === 'paid' ? 'Paid' : 
                          userData.paymentStatus === 'pending' ? 'Pending' : 
                          'Unpaid'
                        }</span>
                      </div>
                      <span className="text-sm text-gray-600">2,000 FCFA</span>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Participation Status Card */}
                <Card className="bg-white shadow-subtle hover:shadow-elevated transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Ticket className="h-5 w-5 mr-2 text-voyage-primary" />
                      Current Status
                    </CardTitle>
                    <CardDescription>
                      Your participation status
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`h-6 w-6 rounded-full flex items-center justify-center ${
                          userData.status === 'selected' ? 'bg-voyage-success' : 
                          userData.status === 'pending' ? 'bg-voyage-warning' : 
                          'bg-gray-200'
                        } mr-2`}>
                          {userData.status === 'selected' && <Award className="h-3 w-3 text-white" />}
                          {userData.status === 'pending' && <Clock className="h-3 w-3 text-white" />}
                          {userData.status === 'active' && <Ticket className="h-3 w-3 text-gray-700" />}
                        </div>
                        <span className="font-medium">{
                          userData.status === 'selected' ? 'Winner!' : 
                          userData.status === 'pending' ? 'Draw Pending' : 
                          'Active Entry'
                        }</span>
                      </div>
                      <span className="text-sm text-gray-600">July 2023</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Referral System Card */}
              <ReferralSystem />
              
              {/* Recent Activity */}
              <Card className="bg-white shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-xl">Recent Activity</CardTitle>
                  <CardDescription>Your latest lottery activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 sm:space-y-6">
                    {userData.participations.slice(0, 3).map((participation) => (
                      <div key={participation.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(participation.status)}`}>
                            {participation.status === 'selected' ? (
                              <Star className="h-5 w-5 text-white" />
                            ) : (
                              <Ticket className="h-5 w-5" />
                            )}
                          </div>
                          
                          <div className="ml-3 sm:ml-4">
                            <p className="font-medium text-sm sm:text-base">{formatDate(participation.date)} Draw</p>
                            <p className="text-xs sm:text-sm text-gray-600">
                              Status: {getStatusText(participation.status)}
                              {participation.paid ? ', Payment: Completed' : ', Payment: Pending'}
                            </p>
                          </div>
                        </div>
                        
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentTab("history")}
                      className="rounded-xl"
                    >
                      View All History
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history" className="space-y-6 animate-fade-in">
              <Card className="bg-white shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-xl">Participation History</CardTitle>
                  <CardDescription>All your previous entries and results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 sm:space-y-6">
                    {userData.participations.map((participation) => (
                      <div key={participation.id} className="flex flex-wrap sm:flex-nowrap items-center justify-between p-3 sm:p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="flex items-center w-full sm:w-auto">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(participation.status)}`}>
                            {participation.status === 'selected' ? (
                              <Star className="h-5 w-5 text-white" />
                            ) : (
                              <Ticket className="h-5 w-5" />
                            )}
                          </div>
                          
                          <div className="ml-3 sm:ml-4">
                            <p className="font-medium text-sm sm:text-base">{formatDate(participation.date)} Draw</p>
                            <p className="text-xs sm:text-sm text-gray-600">
                              Status: {getStatusText(participation.status)}
                              {participation.paid ? ', Payment: Completed' : ', Payment: Pending'}
                            </p>
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="rounded-lg mt-2 sm:mt-0">
                          Details
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-6 animate-fade-in">
              <Card className="bg-white shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-xl">Notifications</CardTitle>
                  <CardDescription>Recent updates and alerts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {userData.notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-3 sm:p-4 rounded-xl transition-colors ${notification.read ? 'bg-white' : 'bg-blue-50'}`}
                      >
                        <div className="flex items-start">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-voyage-primary bg-opacity-10 text-voyage-primary flex-shrink-0`}>
                            <Bell className="h-4 w-4" />
                          </div>
                          
                          <div className="ml-3 flex-grow">
                            <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row">
                              <p className="font-medium text-sm sm:text-base">{notification.title}</p>
                              <span className="text-xs text-gray-500 mt-1 sm:mt-0">{formatDateRelative(notification.date)}</span>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">{notification.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      {/* Payment Popup Dialog */}
      <PaymentPopup 
        open={paymentDialogOpen} 
        onOpenChange={setPaymentDialogOpen} 
      />
      
      <Footer />
    </div>
  );
};

export default Dashboard;
