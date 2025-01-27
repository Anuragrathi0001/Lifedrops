// import "./footer-styles.scss";

import { NavLink } from "react-router-dom";

const FooterComponent = () => {
	const exploreLinks = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "Donate Blood",
			link: "/donate-blood",
		},
		{
			title: "Request Blood",
			link: "/need-blood",
		},
		{
			title: "Donate Money",
			link: "https://donorbox.org/donate-money-11",
		},
		{
			title: "Host Blood Drive",
			link: "/host-blood-drive",
		},
		{
			title: "Contact",
			link: "/contact",
		},
		{
			title: "Admin Dashboard",
			link: "/admin",
		},
	];

	const contactLinks = [
    {
      title: "+91 1234567890",
      link: "tel:9870632087",
    },
    {
      title: "help@lifeDrops.com",
      link: "mailto:help@lifeDrops.com",
    },
    {
      title: "Greater Noida, Uttar Pradesh, India",
      link: "https://www.google.com/maps/dir//Alpha+1,+Block+E,+Alpha+I,+Greater+Noida,+Uttar+Pradesh/@28.4723306,77.5114879,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cea7e6f255555:0x962896a30b7f922d!2m2!1d77.5140181!2d28.4723714!3e0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      title: "Open 24/7",
      link: "/contact",
    },
  ];

	return (
		<section className="footer two-cta-wrapper flex flex-col justify-center items-center w-full mx-auto my-0 px-2.5 pt-[70px] pb-[40px] bg-dark">
			<div className="two-cta-container relative w-[min(100%_-_15px,1250px)]  mx-auto my-0 p-2.5">
				<div className="first-section-wrapper grid sm:grid-cols-[1.5fr_1fr_1fr] gap-10">
					<div className="flex flex-col footer-col first-col">
						<h2 className="not-italic font-bold text-[40px] leading-[55px] text-white">
							Life<span className="text-[red]">Drops</span>
						</h2>
						<h3 className="not-italic font-normal text-[20px] leading-10 text-[#D9D9D9]">
							You don't have to be a doctor to save a life: Just
							donate blood
						</h3>
					</div>
					<div className="footer-col second-col">
						<h3 className="not-italic font-medium text-[16px] leading-[27px] tracking-[0.21em] uppercase text-[red] mb-3">
							Explore
						</h3>
						<ul className="flex flex-col gap-2">
							{exploreLinks.map((link, index) => (
								<li key={index}>
									<NavLink
										className="not-italic font-medium text-[18px] leading-[34px] text-[#D9D9D9]"
										to={link.link}
									>
										{link.title}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					<div className="footer-col third-col">
						<h3 className="not-italic font-medium text-[16px] leading-[27px] tracking-[0.21em] uppercase text-[red] mb-3">
							Contact
						</h3>
						<ul className="flex flex-col gap-2">
							{contactLinks.map((link, index) => (
								<li key={index}>
									<NavLink
										className="not-italic font-medium text-[18px] leading-[34px] text-[#D9D9D9]"
										to={link.link}
									>
										{link.title}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="footer-col fourth-col text-center mt-10 border-t-[1px] border-off_white/[.2] pt-6">
					<h3 className="not-italic text-center font-regular text-[18px] leading-[34px] text-[#D9D9D9] ">
						©️ 2023 LifeDrops - Website design by{"LifeDrop Group GL bajaj greater noida"}
						<a
							href="https://linkedin.com/in/anuragrathi"
							className="underline"
							target="_blank"
						>
							LifeDrops
						</a>
					</h3>
				</div>
			</div>
		</section>
	);
};

export default FooterComponent;
