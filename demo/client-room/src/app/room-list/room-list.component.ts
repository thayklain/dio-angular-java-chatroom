import { Component, OnInit } from '@angular/core';
import {RoomDetailsComponent} from 'src/app/room-details.component';
import {Observable} from "rxjs";
import {RoomService} from '../room.service';
import {Room} from '../room';
import {Component.OnInit} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor(private roomService: RoomService,
  private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.rooms=this.roomService.getRoomList();
  }

  deleteRoom (id: number){
    this.roomService.deleteRoom(id)
    .subscribe (
      data => {
        console.log(data)
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  updateRoom (id: number){
    this.router.navigate(['update', id]);
  }

}
