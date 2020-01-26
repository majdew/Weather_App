import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherdaysweatherComponent } from './otherdaysweather.component';

describe('OtherdaysweatherComponent', () => {
	let component: OtherdaysweatherComponent;
	let fixture: ComponentFixture<OtherdaysweatherComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OtherdaysweatherComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OtherdaysweatherComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
