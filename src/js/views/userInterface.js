import React, { useState, useContext, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";

import "../../styles/userInterface.scss";
import { WidgetTable } from "../component/widgetTable";
import { MirrorLayoutExample } from "../component/mirrorLayoutExample";
import { Navbar } from "../component/navbar";
import { NavbarUser } from "../component/navbarUser";
import { MirrorScreenLayout } from "../component/mirrorLayoutExample";
// import { WidgetTitle } from "./widgetTitle";
// import { Widget } from "./widget";

const item = {
	id: "qonvnqv",
	name: "Twitter",
	class: "widget-icon fa fa-twitter"
};
const item2 = {
	id: "qonvndvqv",
	name: "Clock",
	class: "widget-icon fa fa-clock-o"
};
const item3 = {
	id: "qowvnvndvqv",
	name: "Compliments",
	class: "widget-icon fa fa-heart"
};
const item4 = {
	id: "qonvnqsqsdvqv",
	name: "Weather",
	class: "widget-icon fa fa-cloud"
};

export const UserInterface = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		widgetTable: {
			title: "Widgets",
			items: [item, item3, item4, item2]
		},

		mirrorLayout: {
			title: "Mirror Layout",
			items: []
		}
	});

	const handleDragEnd = ({ destination, source }) => {
		if (!destination) {
			return;
		}
		if (destination.index === source.index && destination.droppableId === source.droppableId) {
			return;
		}

		const itemCopy = { ...state[source.droppableId].items[source.index] };
		setState(prev => {
			prev = { ...prev };

			if (state.mirrorLayout.items.length <= "2" && destination.droppableId == "mirrorLayout") {
				prev[source.droppableId].items.splice(source.index, 1);
				prev[destination.droppableId].items.splice(destination.index, 0, itemCopy);

				actions.setWidgetArray(state.mirrorLayout.items);
				return prev;
			} else if (destination.droppableId == "widgetTable") {
				prev[source.droppableId].items.splice(source.index, 1);
				prev[destination.droppableId].items.splice(destination.index, 0, itemCopy);
				actions.setWidgetArray(state.mirrorLayout.items);
				return prev;
			} else if (destination.droppableId == source.droppableId) {
				prev[source.droppableId].items.splice(source.index, 1);
				prev[destination.droppableId].items.splice(destination.index, 0, itemCopy);
				actions.setWidgetArray(state.mirrorLayout.items);
				return prev;
			} else {
				return prev;
			}
		});
	};

	return (
		<>
			<NavbarUser />

			<div className="container-fluid context">
				<DragDropContext onDragEnd={handleDragEnd}>
					{_.map(state, (data, key) => {
						if (data.title == "Widgets") {
							return (
								<div key={key} className="column-widget widget-table floating-table-effect">
									<h3 className="widget-title">{data.title}</h3>
									<p className="widget-instructions">
										Drag the widget you want to see in your mirror in the position you want it to
										be.
									</p>

									<Droppable droppableId={key}>
										{provided => {
											return (
												<div
													ref={provided.innerRef}
													{...provided.droppableProps}
													className={"droppable-col widget-table"}>
													{data.items.map((el, index) => {
														return (
															<Draggable key={el.id} index={index} draggableId={el.id}>
																{provided => {
																	return (
																		<div
																			className={
																				"pop item float-effect widget-properties d-flex"
																			}
																			ref={provided.innerRef}
																			{...provided.draggableProps}
																			{...provided.dragHandleProps}>
																			<i
																				className={el.class}
																				aria-hidden="true"
																			/>
																			<p className="widget-text">{el.name}</p>
																		</div>
																	);
																}}
															</Draggable>
														);
													})}
													{provided.placeholder}
												</div>
											);
										}}
									</Droppable>
								</div>
							);
						} //AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
						else {
							return (
								<>
									<div key={key} className="column-widget widget-table floating-table-effect">
										<h3 className="widget-title">{data.title}</h3>
										<p className="widget-instructions">
											Drop in here the widgets that you want to see in your mirror.
											<br />- The widgets will be shown in the left side of the mirror.
											<br /> - You can have up to three different widgets in this side.
										</p>

										<Droppable droppableId={key}>
											{provided => {
												return (
													<div
														ref={provided.innerRef}
														{...provided.droppableProps}
														className={"droppable-col mirror-table"}>
														{data.items.map((el, index) => {
															return (
																<Draggable
																	key={el.id}
																	index={index}
																	draggableId={el.id}>
																	{provided => {
																		return (
																			<div
																				className={
																					"pop item float-effect widget-properties d-flex"
																				}
																				ref={provided.innerRef}
																				{...provided.draggableProps}
																				{...provided.dragHandleProps}>
																				<i
																					className={el.class}
																					aria-hidden="true"
																				/>
																				<p className="widget-text">{el.name}</p>
																			</div>
																		);
																	}}
																</Draggable>
															);
														})}
														{provided.placeholder}
													</div>
												);
											}}
										</Droppable>
									</div>
								</>
							);
						}
					})}
				</DragDropContext>
			</div>
			<div className="mirrorcito">
				<MirrorScreenLayout />
			</div>
		</>
	);
};
