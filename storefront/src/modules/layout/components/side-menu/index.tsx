"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Search: "/search",
  Account: "/account",
  Cart: "/cart",
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center gap-2 transition-all ease-out duration-200 focus:outline-none text-slate-300 hover:text-amber-400 group px-4"
                >
                  {/* Hamburger Icon */}
                  <div className="flex flex-col gap-1.5 w-6">
                    <span className={clx(
                      "h-0.5 w-full bg-current transition-all duration-300",
                      open ? "rotate-45 translate-y-2" : ""
                    )}></span>
                    <span className={clx(
                      "h-0.5 w-full bg-current transition-all duration-300",
                      open ? "opacity-0" : ""
                    )}></span>
                    <span className={clx(
                      "h-0.5 w-full bg-current transition-all duration-300",
                      open ? "-rotate-45 -translate-y-2" : ""
                    )}></span>
                  </div>
                  <span className="font-semibold hidden sm:inline">Menu</span>
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-full"
              >
                <Popover.Panel className="fixed left-0 top-0 w-full sm:w-96 h-screen z-50">
                  {/* Backdrop */}
                  <div 
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={close}
                  />
                  
                  {/* Menu Panel */}
                  <div
                    data-testid="nav-menu-popup"
                    className="relative h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-r border-slate-800 shadow-2xl flex flex-col"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-800">
                      <div>
                        <h2 className="text-2xl font-black bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                          17 COLLECTABLES
                        </h2>
                        <p className="text-slate-400 text-xs mt-1">Navigate Collection</p>
                      </div>
                      <button 
                        data-testid="close-menu-button" 
                        onClick={close}
                        className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors duration-200 text-slate-400 hover:text-white"
                      >
                        <XMark className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto p-6">
                      <ul className="flex flex-col gap-2">
                        {Object.entries(SideMenuItems).map(([name, href]) => {
                          return (
                            <li key={name}>
                              <LocalizedClientLink
                                href={href}
                                className="group flex items-center justify-between p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-200"
                                onClick={close}
                                data-testid={`${name.toLowerCase()}-link`}
                              >
                                <span className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-200">
                                  {name}
                                </span>
                                <svg 
                                  className="w-5 h-5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </LocalizedClientLink>
                            </li>
                          )
                        })}
                      </ul>

                      {/* Quick Links Section */}
                      <div className="mt-8 pt-8 border-t border-slate-800">
                        <h3 className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-4">
                          Quick Links
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/grading-guide" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200 flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                              </svg>
                              Grading Guide
                            </a>
                          </li>
                          <li>
                            <a href="/authentication" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200 flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Authentication
                            </a>
                          </li>
                          <li>
                            <a href="/collector-tips" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200 flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              Collector Tips
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>

                    {/* Footer */}
                    <div className="p-6 border-t border-slate-800 bg-slate-950/50">
                      <div
                        className="flex justify-between items-center mb-4"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150 text-amber-400",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} 17 Collectables. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
