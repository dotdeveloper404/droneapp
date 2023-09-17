 
import '../public/assets/css/style.css'
 
import Header from '@/components/Header/Header'
import SideMenu from '@/components/SideMenu/SideMenu'
import Footer from '@/components/Footer/Footer'

 


export const metadata = {
  title: 'Drone',
  description: 'Drone App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    	<link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png"/>
		<link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png"/>
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png"/>
		<link rel="icon" type="image/x-icon" href="/assets/images/favicon/favicon.ico"></link>
    	<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com"/>
		<link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
		

	 	<link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap-grid.min.css"/>
		<link rel="stylesheet" href="/assets/vendor/slick-slider/slick/slick.css"/>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css" />
		<link rel="stylesheet" href="/assets/vendor/bootstrap-icons/font/bootstrap-icons.min.css"/>
		<link rel="stylesheet" href="/assets/vendor/line-awesome/css/line-awesome.min.css"/>

    <script src="/assets/js/jquery.min.js"></script>
		<script src="/assets/vendor/wow/wow.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
		<script src="/assets/vendor/slick-slider/slick/slick.min.js"></script>
		<script src="/assets/js/myscript.js"></script>

      </head>
    
      <body>
      <Header/>
      <SideMenu/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
