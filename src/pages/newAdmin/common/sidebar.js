import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import ContractIcon from "../../../assets/admin/contract-icon.svg";
import ContractGreyIcon from "../../../assets/admin/contract-grey-icon.svg";

export default function Sidebar() {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <>
      <aside class="leftmenu">
        <ul class="collapse navbar-collapse" id="navbarSupportedContent">
          <li>
            <span class="menu-sub-txt">Marketplace </span>
          </li>
          <li>
            <a
              class={`${
                pathname === "/admin/proposals" ||
                pathname.includes("/admin/proposals/detail")
                  ? "active"
                  : ""
              }`}
              onClick={() => history.push("/admin/proposals")}
            >
              <span class="menu-icon">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.25 21.4047H2.67857C1.96786 21.4047 1.28661 21.1207 0.784821 20.6147C0.282143 20.1095 0 19.4237 0 18.7083C0 15.4294 0 8.5507 0 5.6574C0 4.47365 0.766964 3.42832 1.89018 3.07958C4.19464 2.36592 9.04732 0.861294 11.1866 0.198864C12.042 -0.066288 12.958 -0.066288 13.8134 0.198864C15.9527 0.861294 20.8054 2.36592 23.1098 3.07958C24.233 3.42832 25 4.47365 25 5.6574C25 8.5507 25 15.4294 25 18.7083C25 19.4237 24.7179 20.1095 24.2152 20.6147C23.7134 21.1207 23.0321 21.4047 22.3214 21.4047H18.75V22.3035C18.75 23.7929 17.5509 25 16.0714 25C14.0893 25 10.9107 25 8.92857 25C7.44911 25 6.25 23.7929 6.25 22.3035V21.4047ZM16.9643 22.3035V13.3153C16.9643 12.8192 16.5643 12.4165 16.0714 12.4165C14.0893 12.4165 10.9107 12.4165 8.92857 12.4165C8.43571 12.4165 8.03571 12.8192 8.03571 13.3153V22.3035C8.03571 22.7997 8.43571 23.2024 8.92857 23.2024C10.9107 23.2024 14.0893 23.2024 16.0714 23.2024C16.5643 23.2024 16.9643 22.7997 16.9643 22.3035ZM18.75 19.6071H22.3214C22.558 19.6071 22.7857 19.5127 22.9527 19.3437C23.1205 19.1756 23.2143 18.9464 23.2143 18.7083C23.2143 15.4294 23.2143 8.5507 23.2143 5.6574C23.2143 5.26281 22.9589 4.91407 22.5839 4.79813C20.2795 4.08356 15.4277 2.57984 13.2884 1.91651C12.775 1.75742 12.225 1.75742 11.7116 1.91651C9.57232 2.57984 4.72054 4.08356 2.41607 4.79813C2.04107 4.91407 1.78571 5.26281 1.78571 5.6574C1.78571 8.5507 1.78571 15.4294 1.78571 18.7083C1.78571 18.9464 1.87946 19.1756 2.04732 19.3437C2.21429 19.5127 2.44196 19.6071 2.67857 19.6071H6.25V13.3153C6.25 11.826 7.44911 10.6189 8.92857 10.6189C10.9107 10.6189 14.0893 10.6189 16.0714 10.6189C17.5509 10.6189 18.75 11.826 18.75 13.3153V19.6071Z"
                  />
                </svg>
              </span>
              <span class="menu-txt">Proposals </span>
            </a>
          </li>
          <li>
            <a class={`${
                pathname === "/admin/offers" ||
                pathname.includes("/admin/offers/create")
                  ? "active"
                  : ""
              }`}
              onClick={() => history.push("/admin/offers")}>
              <span class="menu-icon">
                <svg
                  width="27"
                  height="29"
                  viewBox="0 0 27 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.1864 20.3911H19.5764C20.7218 19.8918 21.6602 19.0134 22.234 17.9035C22.8077 16.7936 22.9817 15.5199 22.7267 14.2968C22.4717 13.0737 21.8033 11.9757 20.8339 11.1875C19.8644 10.3993 18.6531 9.96904 17.4037 9.96904C16.1542 9.96904 14.9429 10.3993 13.9735 11.1875C13.004 11.9757 12.3356 13.0737 12.0806 14.2968C11.8256 15.5199 11.9996 16.7936 12.5734 17.9035C13.1471 19.0134 14.0856 19.8918 15.2309 20.3911H9.24969V18.0076C9.2504 17.4986 9.09294 17.002 8.79909 16.5864C8.50523 16.1707 8.0895 15.8567 7.60937 15.6876V11.7183C9.06925 11.4901 10.3893 10.7195 11.3058 9.5605C12.2224 8.4015 12.6679 6.93938 12.5535 5.46621C12.439 3.99304 11.773 2.61728 10.6885 1.61373C9.60395 0.610184 8.18073 0.0527344 6.70312 0.0527344C5.22552 0.0527344 3.8023 0.610184 2.71777 1.61373C1.63323 2.61728 0.967227 3.99304 0.852782 5.46621C0.738337 6.93938 1.18388 8.4015 2.10041 9.5605C3.01695 10.7195 4.33699 11.4901 5.79687 11.7183V15.7964C5.3697 15.9918 5.00764 16.3057 4.75379 16.701C4.49994 17.0962 4.36499 17.556 4.365 18.0258V21.7051C4.365 22.6666 4.74692 23.5886 5.42674 24.2684C6.10656 24.9482 7.02859 25.3301 7.99 25.3301H11.5153C11.5486 25.3313 11.5802 25.345 11.6038 25.3686C11.6273 25.3921 11.6411 25.4237 11.6422 25.457V28.0942C11.6422 28.3346 11.7377 28.5651 11.9076 28.735C12.0776 28.905 12.3081 29.0005 12.5484 29.0005C12.7888 29.0005 13.0193 28.905 13.1893 28.735C13.3592 28.5651 13.4547 28.3346 13.4547 28.0942V25.4208C13.4547 24.9064 13.2504 24.4131 12.8867 24.0494C12.523 23.6857 12.0297 23.4814 11.5153 23.4814H7.94469C7.46792 23.4754 7.0127 23.2818 6.67768 22.9426C6.34265 22.6033 6.15481 22.1457 6.15484 21.6689V18.0076C6.14738 17.9189 6.15841 17.8296 6.18724 17.7454C6.21607 17.6611 6.26208 17.5838 6.32235 17.5182C6.38261 17.4527 6.45583 17.4003 6.53736 17.3645C6.6189 17.3287 6.70697 17.3103 6.79601 17.3103C6.88506 17.3103 6.97313 17.3287 7.05467 17.3645C7.1362 17.4003 7.20942 17.4527 7.26968 17.5182C7.32995 17.5838 7.37595 17.6611 7.40479 17.7454C7.43362 17.8296 7.44465 17.9189 7.43719 18.0076V21.2973C7.43719 21.5377 7.53267 21.7682 7.70262 21.9382C7.87258 22.1081 8.10308 22.2036 8.34344 22.2036H22.1864C22.7745 22.206 23.3379 22.4407 23.7538 22.8565C24.1696 23.2724 24.4043 23.8358 24.4067 24.4239V28.0942C24.4067 28.3346 24.5022 28.5651 24.6722 28.735C24.8421 28.905 25.0726 29.0005 25.313 29.0005C25.5533 29.0005 25.7838 28.905 25.9538 28.735C26.1237 28.5651 26.2192 28.3346 26.2192 28.0942V24.4103C26.218 23.3411 25.7927 22.316 25.0367 21.56C24.2807 20.804 23.2556 20.3787 22.1864 20.3775V20.3911ZM7.23328 9.82874C7.05171 9.86849 6.86634 9.88824 6.68047 9.88764C6.10265 9.88619 5.54269 9.68723 5.09351 9.32376C4.64432 8.96029 4.33291 8.45417 4.21094 7.88936C4.18112 7.77116 4.17546 7.64816 4.19429 7.52772C4.21312 7.40728 4.25605 7.29188 4.32052 7.18842C4.38499 7.08496 4.46967 6.99557 4.5695 6.9256C4.66932 6.85563 4.78223 6.80652 4.90148 6.78121C5.02072 6.7559 5.14385 6.7549 5.26349 6.77828C5.38313 6.80167 5.49682 6.84894 5.59776 6.91729C5.6987 6.98564 5.78482 7.07365 5.85095 7.17605C5.91709 7.27846 5.96188 7.39315 5.98266 7.51327C6.02414 7.69915 6.13626 7.86163 6.29531 7.96639C6.3771 8.01878 6.46858 8.0542 6.56433 8.07054C6.66007 8.08689 6.75812 8.08383 6.85265 8.06155C6.98538 8.03034 7.10635 7.96163 7.20114 7.86363C7.29593 7.76562 7.36057 7.64243 7.38734 7.50874C7.41206 7.3543 7.38831 7.196 7.31937 7.05561C7.30086 7.03121 7.27684 7.01152 7.24929 6.99813C7.22173 6.98475 7.19141 6.97805 7.16078 6.97858H6.70312C6.30799 6.97791 5.9185 6.8848 5.56578 6.70671C5.17234 6.51353 4.83588 6.22139 4.5894 5.85896C4.34291 5.49653 4.19488 5.07624 4.15982 4.63934C4.12476 4.20244 4.20387 3.76393 4.3894 3.36683C4.57493 2.96973 4.86051 2.62768 5.2181 2.37423C5.5757 2.12078 5.99304 1.96465 6.42918 1.92114C6.86532 1.87763 7.30528 1.94825 7.7059 2.12606C8.10651 2.30387 8.45403 2.58277 8.71435 2.9354C8.97466 3.28803 9.13884 3.70227 9.19078 4.13749C9.22022 4.37784 9.15298 4.62005 9.00385 4.81082C8.85471 5.00159 8.6359 5.12531 8.39555 5.15475C8.15519 5.1842 7.91299 5.11695 7.72221 4.96782C7.53144 4.81868 7.40772 4.59987 7.37828 4.35952C7.3659 4.25952 7.33242 4.16328 7.28006 4.0772C7.22769 3.99111 7.15763 3.91712 7.07452 3.86015C6.99141 3.80317 6.89715 3.7645 6.79797 3.74669C6.69879 3.72889 6.59696 3.73235 6.49922 3.75686C6.35619 3.79034 6.22704 3.86727 6.12949 3.97708C6.03194 4.0869 5.97077 4.22422 5.95438 4.37019C5.938 4.51617 5.9672 4.66363 6.03798 4.79234C6.10876 4.92105 6.21764 5.0247 6.34969 5.08905C6.44983 5.13843 6.55976 5.16475 6.67141 5.16608L7.03391 5.13436H7.15625C7.52282 5.12851 7.88382 5.22453 8.19903 5.41174C8.51425 5.59895 8.7713 5.86999 8.94156 6.19468C9.12038 6.53789 9.21773 6.91769 9.22605 7.30461C9.23437 7.69152 9.15344 8.07515 8.98954 8.42574C8.82564 8.77632 8.58318 9.08444 8.28096 9.32618C7.97874 9.56792 7.6249 9.73678 7.24687 9.81968L7.23328 9.82874ZM13.7809 15.4067C13.7809 14.6898 13.9935 13.9889 14.3919 13.3928C14.7902 12.7966 15.3563 12.332 16.0187 12.0576C16.6811 11.7833 17.41 11.7115 18.1131 11.8514C18.8163 11.9912 19.4622 12.3365 19.9692 12.8434C20.4762 13.3504 20.8214 13.9963 20.9613 14.6995C21.1012 15.4027 21.0294 16.1316 20.755 16.7939C20.4806 17.4563 20.016 18.0225 19.4199 18.4208C18.8238 18.8191 18.1229 19.0317 17.4059 19.0317C16.4445 19.0317 15.5225 18.6498 14.8427 17.97C14.1629 17.2902 13.7809 16.3681 13.7809 15.4067Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </span>
              <span class="menu-txt">Offers</span>
            </a>
          </li>
          <li>
            <a class={`${
                pathname === "/admin/contracts" ||
                pathname.includes("/admin/contracts/detail/")
                  ? "active"
                  : ""
              }`}
              onClick={() => history.push("/admin/contracts")}>
              <span class="menu-icon">
              {
                pathname === "/admin/contracts" ||
                pathname.includes("/admin/contracts/detail/")
                  ? <img src={ContractIcon} alt="" />
                  : <img src={ContractGreyIcon} alt="" />
              }
              </span>
              <span class="menu-txt">Contracts</span>
            </a>
          </li>
          
          {/* <li>
            <a href="#">
              <span class="menu-icon">
                <svg
                  width="27"
                  height="29"
                  viewBox="0 0 27 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.1864 20.3911H19.5764C20.7218 19.8918 21.6602 19.0134 22.234 17.9035C22.8077 16.7936 22.9817 15.5199 22.7267 14.2968C22.4717 13.0737 21.8033 11.9757 20.8339 11.1875C19.8644 10.3993 18.6531 9.96904 17.4037 9.96904C16.1542 9.96904 14.9429 10.3993 13.9735 11.1875C13.004 11.9757 12.3356 13.0737 12.0806 14.2968C11.8256 15.5199 11.9996 16.7936 12.5734 17.9035C13.1471 19.0134 14.0856 19.8918 15.2309 20.3911H9.24969V18.0076C9.2504 17.4986 9.09294 17.002 8.79909 16.5864C8.50523 16.1707 8.0895 15.8567 7.60937 15.6876V11.7183C9.06925 11.4901 10.3893 10.7195 11.3058 9.5605C12.2224 8.4015 12.6679 6.93938 12.5535 5.46621C12.439 3.99304 11.773 2.61728 10.6885 1.61373C9.60395 0.610184 8.18073 0.0527344 6.70312 0.0527344C5.22552 0.0527344 3.8023 0.610184 2.71777 1.61373C1.63323 2.61728 0.967227 3.99304 0.852782 5.46621C0.738337 6.93938 1.18388 8.4015 2.10041 9.5605C3.01695 10.7195 4.33699 11.4901 5.79687 11.7183V15.7964C5.3697 15.9918 5.00764 16.3057 4.75379 16.701C4.49994 17.0962 4.36499 17.556 4.365 18.0258V21.7051C4.365 22.6666 4.74692 23.5886 5.42674 24.2684C6.10656 24.9482 7.02859 25.3301 7.99 25.3301H11.5153C11.5486 25.3313 11.5802 25.345 11.6038 25.3686C11.6273 25.3921 11.6411 25.4237 11.6422 25.457V28.0942C11.6422 28.3346 11.7377 28.5651 11.9076 28.735C12.0776 28.905 12.3081 29.0005 12.5484 29.0005C12.7888 29.0005 13.0193 28.905 13.1893 28.735C13.3592 28.5651 13.4547 28.3346 13.4547 28.0942V25.4208C13.4547 24.9064 13.2504 24.4131 12.8867 24.0494C12.523 23.6857 12.0297 23.4814 11.5153 23.4814H7.94469C7.46792 23.4754 7.0127 23.2818 6.67768 22.9426C6.34265 22.6033 6.15481 22.1457 6.15484 21.6689V18.0076C6.14738 17.9189 6.15841 17.8296 6.18724 17.7454C6.21607 17.6611 6.26208 17.5838 6.32235 17.5182C6.38261 17.4527 6.45583 17.4003 6.53736 17.3645C6.6189 17.3287 6.70697 17.3103 6.79601 17.3103C6.88506 17.3103 6.97313 17.3287 7.05467 17.3645C7.1362 17.4003 7.20942 17.4527 7.26968 17.5182C7.32995 17.5838 7.37595 17.6611 7.40479 17.7454C7.43362 17.8296 7.44465 17.9189 7.43719 18.0076V21.2973C7.43719 21.5377 7.53267 21.7682 7.70262 21.9382C7.87258 22.1081 8.10308 22.2036 8.34344 22.2036H22.1864C22.7745 22.206 23.3379 22.4407 23.7538 22.8565C24.1696 23.2724 24.4043 23.8358 24.4067 24.4239V28.0942C24.4067 28.3346 24.5022 28.5651 24.6722 28.735C24.8421 28.905 25.0726 29.0005 25.313 29.0005C25.5533 29.0005 25.7838 28.905 25.9538 28.735C26.1237 28.5651 26.2192 28.3346 26.2192 28.0942V24.4103C26.218 23.3411 25.7927 22.316 25.0367 21.56C24.2807 20.804 23.2556 20.3787 22.1864 20.3775V20.3911ZM7.23328 9.82874C7.05171 9.86849 6.86634 9.88824 6.68047 9.88764C6.10265 9.88619 5.54269 9.68723 5.09351 9.32376C4.64432 8.96029 4.33291 8.45417 4.21094 7.88936C4.18112 7.77116 4.17546 7.64816 4.19429 7.52772C4.21312 7.40728 4.25605 7.29188 4.32052 7.18842C4.38499 7.08496 4.46967 6.99557 4.5695 6.9256C4.66932 6.85563 4.78223 6.80652 4.90148 6.78121C5.02072 6.7559 5.14385 6.7549 5.26349 6.77828C5.38313 6.80167 5.49682 6.84894 5.59776 6.91729C5.6987 6.98564 5.78482 7.07365 5.85095 7.17605C5.91709 7.27846 5.96188 7.39315 5.98266 7.51327C6.02414 7.69915 6.13626 7.86163 6.29531 7.96639C6.3771 8.01878 6.46858 8.0542 6.56433 8.07054C6.66007 8.08689 6.75812 8.08383 6.85265 8.06155C6.98538 8.03034 7.10635 7.96163 7.20114 7.86363C7.29593 7.76562 7.36057 7.64243 7.38734 7.50874C7.41206 7.3543 7.38831 7.196 7.31937 7.05561C7.30086 7.03121 7.27684 7.01152 7.24929 6.99813C7.22173 6.98475 7.19141 6.97805 7.16078 6.97858H6.70312C6.30799 6.97791 5.9185 6.8848 5.56578 6.70671C5.17234 6.51353 4.83588 6.22139 4.5894 5.85896C4.34291 5.49653 4.19488 5.07624 4.15982 4.63934C4.12476 4.20244 4.20387 3.76393 4.3894 3.36683C4.57493 2.96973 4.86051 2.62768 5.2181 2.37423C5.5757 2.12078 5.99304 1.96465 6.42918 1.92114C6.86532 1.87763 7.30528 1.94825 7.7059 2.12606C8.10651 2.30387 8.45403 2.58277 8.71435 2.9354C8.97466 3.28803 9.13884 3.70227 9.19078 4.13749C9.22022 4.37784 9.15298 4.62005 9.00385 4.81082C8.85471 5.00159 8.6359 5.12531 8.39555 5.15475C8.15519 5.1842 7.91299 5.11695 7.72221 4.96782C7.53144 4.81868 7.40772 4.59987 7.37828 4.35952C7.3659 4.25952 7.33242 4.16328 7.28006 4.0772C7.22769 3.99111 7.15763 3.91712 7.07452 3.86015C6.99141 3.80317 6.89715 3.7645 6.79797 3.74669C6.69879 3.72889 6.59696 3.73235 6.49922 3.75686C6.35619 3.79034 6.22704 3.86727 6.12949 3.97708C6.03194 4.0869 5.97077 4.22422 5.95438 4.37019C5.938 4.51617 5.9672 4.66363 6.03798 4.79234C6.10876 4.92105 6.21764 5.0247 6.34969 5.08905C6.44983 5.13843 6.55976 5.16475 6.67141 5.16608L7.03391 5.13436H7.15625C7.52282 5.12851 7.88382 5.22453 8.19903 5.41174C8.51425 5.59895 8.7713 5.86999 8.94156 6.19468C9.12038 6.53789 9.21773 6.91769 9.22605 7.30461C9.23437 7.69152 9.15344 8.07515 8.98954 8.42574C8.82564 8.77632 8.58318 9.08444 8.28096 9.32618C7.97874 9.56792 7.6249 9.73678 7.24687 9.81968L7.23328 9.82874ZM13.7809 15.4067C13.7809 14.6898 13.9935 13.9889 14.3919 13.3928C14.7902 12.7966 15.3563 12.332 16.0187 12.0576C16.6811 11.7833 17.41 11.7115 18.1131 11.8514C18.8163 11.9912 19.4622 12.3365 19.9692 12.8434C20.4762 13.3504 20.8214 13.9963 20.9613 14.6995C21.1012 15.4027 21.0294 16.1316 20.755 16.7939C20.4806 17.4563 20.016 18.0225 19.4199 18.4208C18.8238 18.8191 18.1229 19.0317 17.4059 19.0317C16.4445 19.0317 15.5225 18.6498 14.8427 17.97C14.1629 17.2902 13.7809 16.3681 13.7809 15.4067Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </span>
              <span class="menu-txt">Current Bids </span>
            </a>
          </li> */}
          {/* <li>
            <a href="#">
              <span class="menu-icon">
                <svg
                  width="26"
                  height="23"
                  viewBox="0 0 26 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0249 22.2548C12.167 22.2548 11.5098 21.7163 11.0898 21.3113C10.0969 20.3539 3.26028 12.4178 2.73334 11.8054C1.49395 10.5975 0.812225 9.00302 0.812225 7.31177C0.812225 5.60852 1.50367 4.00352 2.75939 2.79302L2.93595 2.62277C3.55175 2.02561 4.28429 1.55218 5.09113 1.22988C5.89798 0.907586 6.76312 0.742826 7.63645 0.745141C9.41173 0.745141 11.0812 1.41189 12.3369 2.62277C12.3657 2.65052 12.3926 2.68052 12.4163 2.71239C12.4171 2.71239 12.6414 2.98127 13 2.98127C13.3757 2.98127 13.5441 2.76714 13.5619 2.74277C13.5938 2.69214 13.6191 2.66477 13.6631 2.62277C14.2789 2.02561 15.0114 1.55218 15.8182 1.22988C16.6251 0.907586 17.4902 0.742826 18.3636 0.745141C19.2369 0.742826 20.102 0.907586 20.9089 1.22988C21.7157 1.55218 22.4483 2.02561 23.0641 2.62277L23.2406 2.79302C24.4963 4.00352 25.1878 5.60852 25.1878 7.31177C25.1878 9.00264 24.5064 10.5964 23.2682 11.8039C22.7421 12.4211 16.1033 20.2099 14.9608 21.3116C14.5408 21.7166 13.8832 22.2548 13.0249 22.2548ZM7.63645 2.24477C6.96747 2.24298 6.30476 2.36917 5.6867 2.61603C5.06863 2.86288 4.50748 3.2255 4.03573 3.68289L3.85917 3.85314C2.89745 4.78052 2.36778 6.00864 2.36778 7.31139C2.36778 8.61414 2.89745 9.84227 3.85917 10.7696C3.87628 10.7858 3.89223 10.803 3.90778 10.821C6.43634 13.7584 11.4211 19.5094 12.1899 20.2508C12.5368 20.5853 12.8176 20.7548 13.0249 20.7548C13.2835 20.7548 13.6222 20.481 13.8606 20.2508C14.7496 19.3931 19.6321 13.7096 22.0891 10.824C22.1054 10.8049 22.1226 10.7869 22.1404 10.7696C23.1022 9.84227 23.6318 8.61377 23.6318 7.31139C23.6318 6.00864 23.1022 4.78052 22.1404 3.85314L21.9639 3.68289C21.4921 3.2255 20.931 2.86288 20.3129 2.61603C19.6949 2.36917 19.0322 2.24298 18.3632 2.24477C17.0246 2.24477 15.7642 2.73977 14.8079 3.63977C14.617 3.88614 14.0477 4.48089 12.9996 4.48089C11.9947 4.48089 11.3842 3.86289 11.2061 3.65327C10.2558 2.74752 8.97255 2.24116 7.63645 2.24477Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </span>
              <span class="menu-txt">Saved </span>
            </a>
          </li> */}
          <li>
            <span class="menu-sub-txt">Account </span>
          </li>
          {/* <li>
            <a href="#">
              <span class="menu-icon">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 25H3C1.346 25 0 23.654 0 22V11C0 9.346 1.346 8 3 8H22C23.654 8 25 9.346 25 11V22C25 23.654 23.654 25 22 25ZM3 10C2.449 10 2 10.449 2 11V22C2 22.551 2.449 23 3 23H22C22.551 23 23 22.551 23 22V11C23 10.449 22.551 10 22 10H3ZM5 0H20C20.2652 0 20.5196 0.105357 20.7071 0.292893C20.8946 0.48043 21 0.734784 21 1C21 1.26522 20.8946 1.51957 20.7071 1.70711C20.5196 1.89464 20.2652 2 20 2H5C4.73478 2 4.48043 1.89464 4.29289 1.70711C4.10536 1.51957 4 1.26522 4 1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0ZM3 4H22C22.2652 4 22.5196 4.10536 22.7071 4.29289C22.8946 4.48043 23 4.73478 23 5C23 5.26522 22.8946 5.51957 22.7071 5.70711C22.5196 5.89464 22.2652 6 22 6H3C2.73478 6 2.48043 5.89464 2.29289 5.70711C2.10536 5.51957 2 5.26522 2 5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </span>
              <span class="menu-txt">My Collection </span>
            </a>
          </li> */}
          <li>
            <a href="#">
              <span class="menu-icon">
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8968 23.045H8.03732C7.53085 23.0561 7.03027 22.9346 6.5853 22.6925C6.14032 22.4503 5.76643 22.096 5.50075 21.6647L0.32004 12.7015C0.110474 12.3441 0 11.9372 0 11.5228C0 11.1085 0.110474 10.7016 0.32004 10.3442L5.50075 1.38103C5.76643 0.949697 6.14032 0.595365 6.5853 0.353223C7.03027 0.11108 7.53085 -0.0104486 8.03732 0.000703976H17.8968C18.4093 -0.00400961 18.914 0.127016 19.3595 0.380472C19.805 0.633928 20.1755 1.00078 20.4334 1.44377L25.6141 10.4069C25.8236 10.7644 25.9341 11.1712 25.9341 11.5856C25.9341 11.9999 25.8236 12.4068 25.6141 12.7642L20.4334 21.7274C20.1601 22.1471 19.7829 22.489 19.3384 22.7199C18.894 22.9508 18.3973 23.0627 17.8968 23.045ZM8.03732 1.40792C7.76587 1.3979 7.4964 1.45776 7.2547 1.58174C7.01302 1.70572 6.80721 1.88969 6.65699 2.11601L1.47629 11.0792C1.38467 11.2322 1.33629 11.4072 1.33629 11.5856C1.33629 11.764 1.38467 11.939 1.47629 12.092L6.65699 21.0552C6.80721 21.2815 7.01302 21.4655 7.2547 21.5894C7.4964 21.7134 7.76587 21.7733 8.03732 21.7633H17.8968C18.1683 21.7733 18.4377 21.7134 18.6794 21.5894C18.9211 21.4655 19.1269 21.2815 19.2771 21.0552L24.4578 12.092C24.5494 11.939 24.5978 11.764 24.5978 11.5856C24.5978 11.4072 24.5494 11.2322 24.4578 11.0792L19.2771 2.11601C19.1269 1.88969 18.9211 1.70572 18.6794 1.58174C18.4377 1.45776 18.1683 1.3979 17.8968 1.40792H8.03732Z"
                    fill="#A4A4A4"
                  />
                  <path
                    d="M12.9671 16.708C11.9477 16.708 10.9513 16.4058 10.1037 15.8395C9.2562 15.2731 8.59563 14.4682 8.20555 13.5265C7.81547 12.5848 7.7134 11.5485 7.91226 10.5488C8.11113 9.54901 8.60198 8.63069 9.32275 7.90991C10.0435 7.18914 10.9619 6.69828 11.9616 6.49942C12.9613 6.30056 13.9976 6.40262 14.9393 6.7927C15.8811 7.18278 16.686 7.84336 17.2523 8.6909C17.8186 9.53844 18.1209 10.5349 18.1209 11.5542C18.1185 12.9204 17.5747 14.2299 16.6087 15.1959C15.6427 16.1619 14.3332 16.7057 12.9671 16.708ZM12.9671 7.74487C12.2136 7.74487 11.4771 7.96828 10.8507 8.38686C10.2243 8.80543 9.736 9.40037 9.44768 10.0964C9.15936 10.7925 9.08392 11.5584 9.2309 12.2974C9.37789 13.0363 9.74069 13.7151 10.2734 14.2478C10.8062 14.7806 11.4849 15.1434 12.2239 15.2904C12.9628 15.4373 13.7288 15.3619 14.4248 15.0736C15.1209 14.7853 15.7158 14.297 16.1344 13.6706C16.553 13.0441 16.7764 12.3076 16.7764 11.5542C16.7764 10.5439 16.3751 9.57499 15.6607 8.8606C14.9463 8.14621 13.9774 7.74487 12.9671 7.74487Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </span>
              <span class="menu-txt">Settings </span>
            </a>
          </li>
          <li>
            <a
              class={`${pathname === "/chats" ? "active" : ""}`}
              onClick={() => history.push("/chats")}
            >
              <span class="menu-icon">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.53125 18.9375H10.0019C10.6722 18.9382 11.3288 19.1271 11.897 19.4826C12.4652 19.8382 12.9222 20.3461 13.2159 20.9487C13.5096 21.5512 13.6283 22.2241 13.5583 22.8907C13.4884 23.5573 13.2327 24.1909 12.8203 24.7194C12.6887 24.8866 12.6202 25.0948 12.6267 25.3075C12.6332 25.5202 12.7144 25.7238 12.856 25.8827C12.9975 26.0415 13.1905 26.1455 13.401 26.1764C13.6116 26.2073 13.8263 26.1631 14.0075 26.0516C17.7223 23.7395 20.7888 20.5215 22.9192 16.6997C25.0497 12.8778 26.1743 8.57739 26.1875 4.20187V3.53125C26.1875 2.81019 25.9011 2.11867 25.3912 1.6088C24.8813 1.09894 24.1898 0.8125 23.4688 0.8125H3.53125C2.81019 0.8125 2.11867 1.09894 1.6088 1.6088C1.09894 2.11867 0.8125 2.81019 0.8125 3.53125V16.2187C0.8125 16.9398 1.09894 17.6313 1.6088 18.1412C2.11867 18.6511 2.81019 18.9375 3.53125 18.9375ZM2.625 3.53125C2.625 3.2909 2.72048 3.06039 2.89043 2.89043C3.06039 2.72048 3.2909 2.625 3.53125 2.625H23.4688C23.7091 2.625 23.9396 2.72048 24.1096 2.89043C24.2795 3.06039 24.375 3.2909 24.375 3.53125V4.22906C24.3552 7.82022 23.5308 11.3613 21.9625 14.592C20.3942 17.8226 18.1219 20.6608 15.3125 22.8978C15.3579 22.1644 15.2542 21.4293 15.0076 20.7371C14.761 20.0449 14.3767 19.4098 13.8778 18.8702C13.3789 18.3307 12.7758 17.8979 12.105 17.5979C11.4341 17.2979 10.7094 17.1371 9.97469 17.125H3.53125C3.2909 17.125 3.06039 17.0295 2.89043 16.8596C2.72048 16.6896 2.625 16.4591 2.625 16.2187V3.53125Z"
                    fill="#A4A4A4"
                  />
                  <path
                    d="M17.125 10.7812C17.6255 10.7812 18.0312 10.3755 18.0312 9.875C18.0312 9.37449 17.6255 8.96875 17.125 8.96875C16.6245 8.96875 16.2188 9.37449 16.2188 9.875C16.2188 10.3755 16.6245 10.7812 17.125 10.7812Z"
                    fill="#A4A4A4"
                  />
                  <path
                    d="M13.5 10.7812C14.0005 10.7812 14.4062 10.3755 14.4062 9.875C14.4062 9.37449 14.0005 8.96875 13.5 8.96875C12.9995 8.96875 12.5938 9.37449 12.5938 9.875C12.5938 10.3755 12.9995 10.7812 13.5 10.7812Z"
                    fill="#A4A4A4"
                  />
                  <path
                    d="M9.875 10.7812C10.3755 10.7812 10.7812 10.3755 10.7812 9.875C10.7812 9.37449 10.3755 8.96875 9.875 8.96875C9.37449 8.96875 8.96875 9.37449 8.96875 9.875C8.96875 10.3755 9.37449 10.7812 9.875 10.7812Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </span>
              <span class="menu-txt">Chats </span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
